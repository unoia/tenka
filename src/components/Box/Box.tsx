import React from "react"
import cx, { ClassValue } from "clsx"
import { BoxSprinkles, boxStyles } from "./Box.css"

export interface BoxProps extends BoxSprinkles {
  children: React.ReactNode
  as?: React.ElementType
  className?: ClassValue
}

export const Box: React.FC<BoxProps> = React.forwardRef(
  ({ as = "div", children, className, ...props }, ref) => {
    const Wrapper = as

    const atomProps: Record<string, unknown> = {}
    const nativeProps: Record<string, unknown> = {}

    for (const key in props) {
      if (boxStyles.properties.has(key as keyof BoxSprinkles)) {
        atomProps[key] = props[key as keyof typeof props]
      } else {
        nativeProps[key] = props[key as keyof typeof props]
      }
    }

    const atomicClasses = boxStyles(atomProps)

    return (
      <Wrapper
        ref={ref}
        className={cx(atomicClasses, className)}
        {...nativeProps}
      >
        {children}
      </Wrapper>
    )
  }
)

Box.displayName = "Box"

export default Box
