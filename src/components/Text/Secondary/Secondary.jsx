import styles from './Secondary.module.css'
import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

const Secondary = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={clsx(styles.root, className)}>
      {children}
    </span>
  )
}

Secondary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Secondary
