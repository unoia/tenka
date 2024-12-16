import styles from "./Wrapper.module.scss"
import React from "react"
import cx from "clsx"

const Wrapper = ({ children, className, ...restProps }) => {
  return (
    <div className={cx(styles.root)} {...restProps}>
      {children}
    </div>
  )
}

export default Wrapper
