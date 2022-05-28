import styles from './Info.module.css'
import React from 'react'
import cx from 'clsx'

const Info = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Info
