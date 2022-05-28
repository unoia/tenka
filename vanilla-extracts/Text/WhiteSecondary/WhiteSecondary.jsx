import styles from './WhiteSecondary.module.css'
import React from 'react'
import cx from 'clsx'

const WhiteSecondary = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default WhiteSecondary
