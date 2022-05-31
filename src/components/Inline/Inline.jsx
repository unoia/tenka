import React from 'react'
// import cx from 'clsx'

import { Box } from '../Box'
// import { inlineStyles } from './Inline.css'

export const Inline = ({
  children,
  space,
  display = 'flex',
  className,
  ...restProps
}) => {
  return (
    <Box display={display} columnGap={space} {...restProps}>
      {children}
    </Box>
  )
}

Inline.displayName = 'Inline'

export default Inline
