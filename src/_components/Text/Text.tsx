import React from 'react'
import cx, { ClassValue } from 'clsx'
import { tokens } from '../../styles.css'
import { TextColor, textStyles } from './Text.css'

export type TextProps = {
  children: React.ReactNode
  as?: React.ElementType<any>
  className?: ClassValue
  variant?: keyof typeof tokens.size | keyof typeof tokens['line-height']
  weight?: keyof typeof tokens.weight
  size?: keyof typeof tokens.size
  lineHeight?: keyof typeof tokens['line-height']
  color?: TextColor
}

type Variant = {
  variant?: keyof typeof tokens.size | keyof typeof tokens['line-height'] | any
  weight?: keyof typeof tokens.weight
  size?: keyof typeof tokens.size
  lineHeight?: keyof typeof tokens['line-height']
}

const parseWeight = (
  variant: keyof typeof tokens.size | keyof typeof tokens['line-height'] | any
) => {
  if (
    variant === 'display-1' ||
    variant === 'display-2' ||
    variant === 'display-3'
  ) {
    return '800'
  }

  if (
    variant === 'heading-1' ||
    variant === 'heading-2' ||
    variant === 'heading-3'
  ) {
    return '700'
  }

  if (variant === 'heading-4' || variant === 'heading-5') {
    return '600'
  }

  if (variant === 'heading-6') {
    return '500'
  }

  if (
    variant === 'xlarge' ||
    variant === 'large' ||
    variant === 'medium' ||
    variant === 'small' ||
    variant === 'body-1' ||
    variant === 'body-2' ||
    variant === 'body-3' ||
    variant === 'body-4' ||
    variant === 'caption-1' ||
    variant === 'caption-2'
  ) {
    return '400'
  }

  return '400'
}
const parseVariant = ({ variant, weight, size, lineHeight }: Variant) => {
  if (typeof variant === 'string') {
    return {
      fontWeight: weight ?? parseWeight(variant),
      fontSize: size ?? variant,
      lineHeight: lineHeight ?? variant,
    } as const
  }

  if (typeof variant === 'object') {
    let parsedWeight: { [key: string | number]: string } = {}
    for (const key in variant) {
      let value = variant[key]
      parsedWeight[key] = parseWeight(value)
    }
    return {
      fontWeight: weight ?? parsedWeight,
      fontSize: size ?? variant,
      lineHeight: lineHeight ?? variant,
    } as const
  }
}

export const Text: React.FC<TextProps> = React.forwardRef(
  (
    {
      as: Component = 'p',
      children,
      className,
      variant,
      weight,
      size,
      lineHeight,
      color = 'primary',
      ...props
    },
    ref
  ) => {
    const variants = parseVariant({
      variant,
      weight,
      size,
      lineHeight,
    })

    return (
      <Component
        ref={ref}
        className={cx(
          className,
          textStyles({
            color,
            ...variants,
          })
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

export default Text
