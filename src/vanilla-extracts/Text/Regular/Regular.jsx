import styles from './Regular.module.css'
import React from 'react'
import cx from 'clsx'

const Regular = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Regular
