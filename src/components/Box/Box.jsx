// import styles from './Box.module.css'
import React from 'react'
import cx from 'clsx'
import { bool, node, object, string, oneOfType } from 'prop-types'
import { boxStyles } from './Box.css.js'

export const Box = ({ as, children, className, ...restProps }) => {
  const Wrapper = as

  const atomProps = {}
  const nativeProps = {}

  for (const key in restProps) {
    if (boxStyles.properties.has(key)) {
      atomProps[key] = restProps[key]
    } else {
      nativeProps[key] = restProps[key]
    }
  }

  const atomicClasses = boxStyles(atomProps)
  // console.log({ atomProps })

  return (
    <Wrapper
      className={cx(atomicClasses, {
        [className]: className,
      })}
      {...nativeProps}
    >
      {children}
    </Wrapper>
  )
}

Box.displayName = 'Box'
Box.defaultProps = {
  as: 'div',
}

Box.propTypes = {
  children: node.isRequired,
  className: oneOfType([string, object]),
  as: string,
  inline: bool,
}

export default Box
