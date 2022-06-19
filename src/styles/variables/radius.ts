/*
  TextSize tokens
  Base: 1rem == 16px
*/

export const radius = {
  none: "0px",
  xxs: '2px',
  xs: '3px',
  s: '6px',
  sm: '8px',
  m: '12px',
  ml: '16px',
  l: '20px',
  xl: '24px',
  xxl: '40px',
  rounded: '9999999px',
  full: '9999999px',
  field: '6px',
  card: '12px',
} as const

export type Radius = keyof typeof radius
