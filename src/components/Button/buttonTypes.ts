
import { ClassValue } from "clsx"
import { ButtonSprinkles } from "./Button.css"

export interface sizesProps {
  small?: Boolean
  compact?: Boolean
  medium?: Boolean
  large?: Boolean
}
export interface shapesProps {
  rect?: Boolean
  pill?: Boolean
  square?: Boolean
  circle?: Boolean
}
export interface variantsProps {
  primary?: Boolean
  secondary?: Boolean
  tertiary?: Boolean
  danger?: Boolean
  critical?: Boolean
  brand?: Boolean
  ghost?: Boolean
  light?: Boolean
}
export interface ButtonProps extends ButtonSprinkles, variantsProps, sizesProps, shapesProps {
  children?: React.ReactNode
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  icon?: React.ReactNode
  as?: React.ElementType
  className?: ClassValue
  overlap?: Boolean
  isLoading?: Boolean
  isDisabled?: Boolean
  isActive?: Boolean
  tooltipArrow?: Boolean
  title?: String
  tooltip?: String
  delay?: number
  tooltipPlacement?: "top" | "bottom" | "left" | "right"
  shape?: "rect" | "square" | "circle" | "pill"
  size?: "xsmall" | "small" | "medium" | "large"
  width?: "hug" | "full"
  variant?:
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "light"
  | "brand"
  | "critical"
  | "danger"
}