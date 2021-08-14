import styles from "./Accent.module.css";
import React from "react";
import cx from "classnames";

const Accent = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  );
};

export default Accent;
