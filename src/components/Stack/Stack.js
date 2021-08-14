import styles from "./Stack.module.css";
import React from "react";
import cx from "classnames";

import { withGapProps } from "./_libs";
import { Box } from "./../";

const StackNoModifier = React.forwardRef(
  ({ as, gap, children, className, ...restProps }, forwardedRef) => {
    return (
      <Box
        ref={forwardedRef}
        as={as}
        className={cx({
          [styles.root]: true,
          [styles[gap]]: gap,
          [className]: className,
        })}
        {...restProps}
      >
        {children}
      </Box>
    );
  }
);

StackNoModifier.displayName = "Stack";

export const Stack = withGapProps(StackNoModifier);

export default Stack;
