/*
  Shadow tokens
*/

export const boxShadow = {
  "s": '0 2px 4px rgba(0, 0, 0, 0.06)',
  "sm": '0px 0px 4px rgba(0, 0, 0, 0.08)',
  "m": '0 16px 40px rgba(0, 0, 0, 0.12)',
  "l": '0 16px 44px -12px rgba(26, 26, 29, 0.3)',
  "card": '0px 4px 4px rgba(0,0,0,.25)',
  "drop-shadow": '0px 1px 10px #bfbfbf',
} as const

export type BoxShadow = keyof typeof boxShadow
