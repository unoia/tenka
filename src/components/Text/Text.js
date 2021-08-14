// This code taken and modified from SEEK OSS Styleguide
// source: https://github.com/seek-oss/seek-style-guide

import styles from "./Text.module.css";
import React, { useEffect } from "react";
import {
  bool,
  node,
  object,
  string,
  oneOf,
  oneOfType,
  number,
} from "prop-types";
import cx from "classnames";

import {
  withTextSizeProps,
  sizes,
  modifiers,
  withTextModifierProps,
} from "./_libs";

import stylesStrong from "./Strong/Strong.module.css";
import stylesRegular from "./Regular/Regular.module.css";
import stylesLight from "./Light/Light.module.css";

import { root as stylesSecondary } from "./Secondary/Secondary.module.css";
import { root as stylesPositive } from "./Positive/Positive.module.css";
import { root as stylesCritical } from "./Critical/Critical.module.css";
import { root as stylesHighlight } from "./Highlight/Highlight.module.css";
import { root as stylesInfo } from "./Info/Info.module.css";
import { root as stylesWhite } from "./White/White.module.css";
import { root as stylesWhiteSecondary } from "./WhiteSecondary/WhiteSecondary.module.css";
import { root as stylesAccent } from "./Accent/Accent.module.css";
import { root as stylesAccentSecondary } from "./AccentSecondary/AccentSecondary.module.css";

const textStyleModifier = {
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
    const Component = as || "span";

    useEffect(() => {
      console.log(typeof truncate === "number");
      if (truncate && typeof truncate === "number") {
        document.documentElement.style.setProperty("--text-clamp", truncate);
      }
    }, [truncate]);

    return (
      <Component
        ref={forwardedRef}
        className={cx({
          [styles[size]]: size,
          [styles[align]]: align,
          [textStyleModifier[modifier]]: modifier,
          [styles.truncate]: typeof truncate === "boolean" && truncate,
          [styles.clamp]: typeof truncate === "number" && truncate,
          [styles.breakWord]: breakWord,
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
  truncate: oneOfType([bool, number]),
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
  size: oneOf(sizes),
  // size: oneOf([...modifiedSizes]),
  /**
   * Modifiers of text styles
   * Use directly as a prop
   */
  modifier: oneOf(modifiers),

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
