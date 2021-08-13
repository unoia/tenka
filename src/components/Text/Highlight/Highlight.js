import styles from "./Highlight.module.scss";
import React from "react";
import cx from "classnames";

const Highlight = ({ children, className, ...restProps }) => {
  return (
    <mark {...restProps} className={cx(styles.root)}>
      {children}
    </mark>
  );
};

export default Highlight;
