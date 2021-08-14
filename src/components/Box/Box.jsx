import styles from "./Box.module.css";
import React from "react";
import cx from "classnames";
import { bool, node, object, string, oneOf, oneOfType } from "prop-types";

import { withBoxPaddingProps } from "./libs";

const BoxNoModifier = ({
  inline,
  as,
  padding,
  py,
  px,
  pt,
  pr,
  pb,
  pl,
  children,
  className,
  ...restProps
}) => {
  const Component = as ? as : "div";

  return (
    <Component
      className={cx(vanilla[padding], {
        [styles.inline]: inline,
        // [styles[padding]]: padding,
        [styles[`py-${py}`]]: py,
        [styles[`px-${px}`]]: px,
        [styles[`pt-${pt}`]]: pt,
        [styles[`pr-${pr}`]]: pr,
        [styles[`pb-${pb}`]]: pb,
        [styles[`pl-${pl}`]]: pl,
        [className]: className,
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};

BoxNoModifier.displayName = "Box";

BoxNoModifier.defaultProps = {
  as: "div",
};

BoxNoModifier.propTypes = {
  children: node.isRequired,
  className: oneOfType([string, object]),
  as: string,
  inline: bool,
  padding: oneOf(["xs", "s", "sm", "m", "ml", "l", "xl", "xxl", "xxxl"]),
  py: oneOf(["xs", "s", "sm", "m", "ml", "l", "xl", "xxl", "xxxl"]),
  px: oneOf(["xs", "s", "sm", "m", "ml", "l", "xl", "xxl", "xxxl"]),
  pt: oneOf(["xs", "s", "sm", "m", "ml", "l", "xl", "xxl", "xxxl"]),
  pr: oneOf(["xs", "s", "sm", "m", "ml", "l", "xl", "xxl", "xxxl"]),
  pb: oneOf(["xs", "s", "sm", "m", "ml", "l", "xl", "xxl", "xxxl"]),
  pl: oneOf(["xs", "s", "sm", "m", "ml", "l", "xl", "xxl", "xxxl"]),
};

export const Box = withBoxPaddingProps(BoxNoModifier);

export default Box;
