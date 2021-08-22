import styles from './Box.module.css'
import React from 'react'
import cx from 'clsx'
import { bool, node, object, string, oneOf, oneOfType } from 'prop-types'

import { withBoxPaddingProps, sizes } from './libs'

const BoxNoModifier = ({
  inline,
  as,
  padding,
  py,
  px,
  pt,
  pr,
  pb,
  pl,
  children,
  className,
  ...restProps
}) => {
  const Component = as ? as : 'div'

  return (
    <Component
      className={cx({
        [styles.inline]: inline,
        [styles[padding]]: padding,
        [styles[`py-${py}`]]: py,
        [styles[`px-${px}`]]: px,
        [styles[`pt-${pt}`]]: pt,
        [styles[`pr-${pr}`]]: pr,
        [styles[`pb-${pb}`]]: pb,
        [styles[`pl-${pl}`]]: pl,
        [className]: className,
      })}
      {...restProps}
    >
      {children}
    </Component>
  )
}

BoxNoModifier.displayName = 'Box'

BoxNoModifier.defaultProps = {
  as: 'div',
}

BoxNoModifier.propTypes = {
  children: node.isRequired,
  className: oneOfType([string, object]),
  as: string,
  inline: bool,
  padding: oneOf(sizes),
  py: oneOf(sizes),
  px: oneOf(sizes),
  pt: oneOf(sizes),
  pr: oneOf(sizes),
  pb: oneOf(sizes),
  pl: oneOf(sizes),
}

export const Box = withBoxPaddingProps(BoxNoModifier)

export default Box
