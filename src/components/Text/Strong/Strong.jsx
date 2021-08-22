import styles from './Strong.module.css'
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'clsx'

const Strong = ({ children, className, ...restProps }) => {
  return (
    <strong {...restProps} className={cx(styles.root, className)}>
      {children}
    </strong>
  )
}

Strong.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Strong
