import styles from "./White.module.css";
import React from "react";
import cx from "classnames";

const White = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  );
};

export default White;
