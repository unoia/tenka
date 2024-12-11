/*
  Shadow tokens
*/

export const boxShadow = {
  // "s": '0 2px 4px rgba(0, 0, 0, 0.06)',
  // "sm": '0px 0px 4px rgba(0, 0, 0, 0.08)',
  // "m": '0 16px 40px rgba(0, 0, 0, 0.12)',
  // "l": '0 16px 44px -12px rgba(26, 26, 29, 0.3)',
  "shallow-above": "0px -4px 16px 0px rgba(0, 0, 0, 0.12)",
  "shallow-below": "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
  "medium-above": "0px -6px 20px 0px rgba(0, 0, 0, 0.2)",
  "medium-below": "0px 6px 20px 0px rgba(0, 0, 0, 0.2)",
  "deep-above": "0px -16px 48px 0px rgba(0, 0, 0, 0.22)",
  "deep-below": "0px 16px 48px 0px rgba(0, 0, 0, 0.22)",
  "card": '0px 4px 4px rgba(0,0,0,.25)',
  "drop-shadow": '0px 1px 10px #bfbfbf',
  "button-focus": "0px 0px 0px 1.5px var(--tenka-bg-primary), 0px 0px 0px 4px var(--tenka-text-primary)",
  "button-critical-focus": "0px 0px 0px 1.5px var(--tenka-bg-primary), 0px 0px 0px 4px var(--tenka-text-error)",
} as const

export type BoxShadow = keyof typeof boxShadow
