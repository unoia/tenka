import React from 'react'
import { tokens } from '../../styles.css'

import { Box } from '../Box'

export type StackProps = {
  children?: React.ReactNode
  space?: keyof typeof tokens.space
  display?: keyof typeof tokens.display
}

export const Stack: React.FC<StackProps> = ({
  children,
  space,
  display = 'grid',
  ...props
}) => {
  return (
    <Box display={display} rowGap={space} {...props}>
      {children}
    </Box>
  )
}

Stack.displayName = 'Stack'

export default Stack
