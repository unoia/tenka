import styles from './Button.module.css'
import React from 'react'
import cx from 'clsx'
import { useButton } from '@react-aria/button'

const Button = ({ children, className, ...restProps }) => {
  return (
    <div className={cx(styles.root)} {...restProps}>
      {children}
    </div>
  )
}

export default Button
