import React from "react"
import { vars } from "../../styles.css"

import { Box, BoxSprinkles } from "../Box"

export interface InlineProps
  extends Omit<BoxSprinkles, "children" | "display"> {
  children?: React.ReactNode
  space: keyof typeof vars.space
  display?: keyof typeof vars.display
}

export const Inline: React.FC<InlineProps> = ({
  children,
  display = "flex",
  space,
  ...props
}) => {
  return (
    <Box display={display} columnGap={space} {...props}>
      {children}
    </Box>
  )
}

Inline.displayName = "Inline"

export default Inline
