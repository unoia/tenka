import styles from './AccentSecondary.module.css'
import React from 'react'
import cx from 'clsx'

const AccentSecondary = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default AccentSecondary
