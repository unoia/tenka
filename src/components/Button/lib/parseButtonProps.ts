

export const sizes = ["xsmall", "small", "medium", "large"]
export const shapes = ["rect", "pill", "square", "circle"]
export const variants = [
  "primary",
  "secondary",
  "tertiary",
  "danger",
  "critical",
  "brand",
  "ghost",
  "light",
]

export const parseButtonProps = (props: any) => {
  const sizeProps: any = {}
  const shapeProps: any = {}
  const variantProps: any = {}

  sizes?.forEach((size) => {
    if (props[size]) {
      sizeProps.size = size
    }
  })

  shapes?.forEach((shape) => {
    if (props[shape]) {
      shapeProps.shape = shape
    }
  })

  variants?.forEach((variant) => {
    if (props[variant]) {
      variantProps.variant = variant
    }
  })

  return { ...sizeProps, ...shapeProps, ...variantProps }
}