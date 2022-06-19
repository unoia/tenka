import React from 'react'
import cx, { ClassValue } from 'clsx'
import { tokens } from '../../styles.css'
import { textStyles } from './Text.css'

export type TextProps = {
  children: React.ReactNode
  as?: React.ElementType<any>
  className?: ClassValue
  weight?: keyof typeof tokens.weight
  size?: keyof typeof tokens.size
  lineHeight?: keyof typeof tokens.lineHeight
}

export const Text: React.FC<TextProps> = React.forwardRef(
  (
    {
      as: Component = 'p',
      children,
      className,
      weight = '400',
      size = 'body-2',
      lineHeight,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cx(
          className,
          textStyles({
            fontWeight: weight,
            fontSize: size,
            lineHeight,
          })
        )}
      >
        {children}
      </Component>
    )
    // return React.createElement(as, { children, className, ref })
  }
)

export default Text
