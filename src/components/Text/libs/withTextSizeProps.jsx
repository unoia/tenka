// This code taken and modified from SEEK OSS Styleguide
// source: https://github.com/seek-oss/seek-style-guide

import React from "react";
import PropTypes from "prop-types";

import { omit, has, some, includes } from "lodash";

export const sizes = [
  "display1",
  "display2",
  "display3",

  "heading1",
  "heading2",
  "heading3",
  "heading4",
  "heading5",
  "heading6",

  "xlarge",
  "large",
  "medium",
  "small",

  "labelSmall",
  "label",
  "labelLarge",

  "captionSmall",
  "caption",
  "captionLarge",
];

const getBooleanSizePropTypes = () => {
  const booleanProps = {};

  sizes?.forEach((size) => {
    booleanProps[size] = PropTypes.bool;
  });

  return booleanProps;
};

export const SizePropTypes = {
  size: (props, propName, componentName) => {
    // eslint-disable-line consistent-return
    if (props.size && !includes(sizes, props.size)) {
      return new Error(
        `Invalid prop size='${props.size}' supplied to ${componentName}`
      );
    }

    if (props.size && some(sizes, (size) => has(props, size))) {
      return new Error(
        `Seems that you've accidentially supplied boolean size along with size='${props.size}' to ${componentName}, please remove one of them. Otherwise boolean prop will overwrite the 'size' prop.`
      );
    }
  },
  ...getBooleanSizePropTypes(),
};

const parseBooleanSize = (props) => {
  const sizeProps = {};

  sizes?.forEach((size) => {
    if (props[size]) {
      sizeProps.size = size;
    }
  });

  return sizeProps;
};

export const withTextSizeProps = (OriginalComponent) => {
  const DecoratedComponent = React.forwardRef((props, forwardedRef) => {
    const sizeProp = parseBooleanSize(props);

    const newProps = {
      ...omit(props, sizes),
      ...sizeProp,
    };

    return <OriginalComponent ref={forwardedRef} {...newProps} />;
  });

  DecoratedComponent.propTypes = SizePropTypes;
  DecoratedComponent.displayName = OriginalComponent.displayName;

  return DecoratedComponent;
};

export default withTextSizeProps;
