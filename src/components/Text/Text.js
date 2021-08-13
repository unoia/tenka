// This code taken and modified from SEEK OSS Styleguide
// source: https://github.com/seek-oss/seek-style-guide

import styles from "./Text.module.scss";
import React from "react";
import {
  bool,
  node,
  object,
  string,
  oneOf,
  oneOfType,
  shape,
} from "prop-types";
import cx from "classnames";
import { motion } from "framer-motion";

import { withTextSizeProps, withTextModifierProps } from "./_libs";

import stylesStrong from "./Strong/Strong.module.scss";
import stylesRegular from "./Regular/Regular.module.scss";
import stylesLight from "./Light/Light.module.scss";

import { root as stylesSecondary } from "./Secondary/Secondary.module.scss";
import { root as stylesPositive } from "./Positive/Positive.module.scss";
import { root as stylesCritical } from "./Critical/Critical.module.scss";
import { root as stylesHighlight } from "./Highlight/Highlight.module.scss";
import { root as stylesInfo } from "./Info/Info.module.scss";
import { root as stylesWhite } from "./White/White.module.scss";
import { root as stylesWhiteSecondary } from "./WhiteSecondary/WhiteSecondary.module.scss";
import { root as stylesAccent } from "./Accent/Accent.module.scss";
import { root as stylesAccentSecondary } from "./AccentSecondary/AccentSecondary.module.scss";

const textStyleModifier = {
  link: styles.link,
  secondary: stylesSecondary,
  positive: stylesPositive,
  critical: stylesCritical,
  highlight: stylesHighlight,
  info: stylesInfo,
  white: stylesWhite,
  whiteSecondary: stylesWhiteSecondary,
  accent: stylesAccent,
  accentSecondary: stylesAccentSecondary,
};

export const TextNoModifier = React.forwardRef(
  (
    {
      as,
      children,
      className,
      size,
      modifier,
      align,
      strong,
      regular,
      light,
      truncate,
      breakWord,
      childStyle,
      childInitial,
      childAnimate,
      prewrap,
      ...restProps
    },
    forwardedRef
  ) => {
    const Component = motion[as] || motion.span;

    return (
      <Component
        ref={forwardedRef}
        className={cx({
          [styles[size]]: size,
          [styles.truncate]: truncate,
          [styles.breakWord]: breakWord,
          [styles[align]]: align,
          [textStyleModifier[modifier]]: modifier,
          [stylesLight.root]: light,
          [stylesStrong.root]: strong,
          [stylesRegular.root]: regular,
          [styles.prewrap]: prewrap,
          [className]: className,
        })}
        {...restProps}
      >
        {children}
      </Component>
    );
  }
);

TextNoModifier.displayName = "Text";

TextNoModifier.defaultProps = {
  as: "span",
  size: "medium",
  // align: 'left',
  // modifier: false,
  truncate: false,
  breakWord: false,
  regular: false,
  light: false,
  strong: false,
  prewrap: false,
};

TextNoModifier.propTypes = {
  children: node.isRequired,
  /** Rendering the component as specific html tag */
  as: string,
  /**
   * Additional className for Text component
   */
  className: oneOfType([string, object]),
  /** Indicating whether the Text should truncate with ellipsis when overflow */
  truncate: bool,
  /** Indicating whether the Text should move to new line and break word when overflow */
  breakWord: bool,
  /**
   * Alignment of text
   * Use directly as a prop
   */
  align: oneOf(["left", "right", "center", "justify"]),
  /**
   * Size of text
   * Use directly as a prop
   */
  size: oneOf([
    "display1",
    "display2",
    "display3",

    "heading1",
    "heading2",
    "heading3",
    "heading4",
    "heading5",
    "heading6",

    "small",
    "medium",
    "large",

    "label",
    "labelSmall",

    "caption",
  ]),
  // size: oneOf([...modifiedSizes]),
  /**
   * Modifiers of text styles
   * Use directly as a prop
   */
  modifier: oneOf([
    "link",
    "positive",
    "critical",
    "secondary",
    "highlight",
    "info",
    "white",
    "whiteSecondary",
    "accent",
    "accentSecondary",
  ]),

  /**
   * Apply designated strong font-weight to text
   */
  strong: bool,
  /**
   * Apply designated regular font-weight to text
   */
  regular: bool,
  /**
   * Apply designated light font-weight to text
   */
  light: bool,
  prewrap: bool,
};

export const Text = withTextSizeProps(withTextModifierProps(TextNoModifier));

export default Text;
