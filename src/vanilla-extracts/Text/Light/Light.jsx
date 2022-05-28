import styles from './Light.module.css'
import React from 'react'
import cx from 'clsx'

const Light = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Light
