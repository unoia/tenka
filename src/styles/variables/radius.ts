/*
  Border Radiuse tokens
*/

export const radius = {
  none: "0px",
  xs: '4px', // small components, e.g. badges, tags
  s: '8px', // for components inside other, e.g. buttons, input field
  m: '12px', // most common used, medium sized components e.g. cards, banners
  l: '16px', // large container components, e.g. dialog, sheet
  rounded: '9999999px',
  full: '9999999px',
  field: 'var(--tenka-radius-s, 8px)',
  card: 'var(--tenka-radius-m, 12px)',
} as const

export type Radius = keyof typeof radius
