import styles from "./Button.module.css"
import React from "react"
import cx from "clsx"

const Button = ({ children, className, ...restProps }) => {
  return (
    <div className={cx(styles.root)} {...restProps}>
      {children}
    </div>
  )
}

export default Button
