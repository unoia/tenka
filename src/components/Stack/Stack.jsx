import React from 'react'
// import cx from 'clsx'

import { Box } from '../Box'
// import { stackStyles } from './Stack.css'

export const Stack = ({
  children,
  space,
  display = 'grid',
  height,
  className,
  ...restProps
}) => {
  return (
    <Box display={display} height={height} spacey={space} {...restProps}>
      {children}
    </Box>
  )
}

Stack.displayName = 'Stack'

export default Stack
