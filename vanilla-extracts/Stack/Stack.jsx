import styles from './Stack.module.css'
import React from 'react'
import cx from 'clsx'

import { withGapProps } from './libs'
import { Box } from './../Box/Box'

const StackNoModifier = React.forwardRef(
  ({ as, gap, children, className, ...restProps }, forwardedRef) => {
    return (
      <Box
        ref={forwardedRef}
        as={as}
        className={cx({
          [styles.root]: true,
          [styles[gap]]: gap,
          [className]: className,
        })}
        {...restProps}
      >
        {children}
      </Box>
    )
  }
)

StackNoModifier.displayName = 'Stack'

export const Stack = withGapProps(StackNoModifier)

export default Stack
