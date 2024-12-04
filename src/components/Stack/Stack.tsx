import React from "react"
import { vars } from "../../styles.css"

import { Box, BoxSprinkles } from "../Box"

export interface StackProps extends Omit<BoxSprinkles, "children" | "display"> {
  children?: React.ReactNode
  space: keyof typeof vars.space
  display?: keyof typeof vars.display
}

export const Stack: React.FC<StackProps> = ({
  children,
  space,
  display = "grid",
  ...props
}) => {
  return (
    <Box display={display} rowGap={space} {...props}>
      {children}
    </Box>
  )
}

Stack.displayName = "Stack"

export default Stack
