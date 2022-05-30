import React from 'react'
import cx from 'clsx'
import { boxStyles } from './Box.css.js'

export const Box = React.forwardRef(
  ({ as = 'div', children, className, ...restProps }, ref) => {
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
        ref={ref}
        className={cx(atomicClasses, {
          [className]: className,
        })}
        {...nativeProps}
      >
        {children}
      </Wrapper>
    )
  }
)

Box.displayName = 'Box'

export default Box
