// import styles from './Box.module.css'
import React from 'react'
import cx from 'clsx'
import { bool, node, object, string, oneOf, oneOfType } from 'prop-types'
import { boxStyles } from './Box.css'

export const Box = ({ as, children, className, ...restProps }) => {
  const Component = as ? as : 'div'

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

  console.log({ atomProps })

  return (
    <Component
      className={cx(atomicClasses, {
        [className]: className,
      })}
      {...nativeProps}
    >
      {children}
    </Component>
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
  // padding: oneOf(sizes),
  // py: oneOf(sizes),
  // px: oneOf(sizes),
  // pt: oneOf(sizes),
  // pr: oneOf(sizes),
  // pb: oneOf(sizes),
  // pl: oneOf(sizes),
}

export default Box
