import styles from './Accent.module.css'
import React from 'react'
import cx from 'clsx'

const Accent = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Accent
