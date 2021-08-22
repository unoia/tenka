import styles from './Critical.module.css'
import React from 'react'
import cx from 'clsx'

const Critical = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Critical
