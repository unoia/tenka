import styles from "./Positive.module.css";
import React from "react";
import cx from "classnames";

const Positive = ({ children, className, ...restProps }) => {
  return (
    <span
      className={cx(styles.root, { [className]: className })}
      {...restProps}
    >
      {children}
    </span>
  );
};

export default Positive;
