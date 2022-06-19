/*
 *
 * Flex properties
 */

export const direction = {
  "row": 'row',
  "row-reverse": 'row-reverse',
  "column": 'column',
  "column-reverse": 'column-reverse',
} as const

export type FlexDirection = keyof typeof direction

export const flexWrap = {
  wrap: 'wrap',
  nowrap: 'nowrap',
} as const

export type FlexWrap = keyof typeof flexWrap

export const justifyContent = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
} as const

export type JustifyContent = keyof typeof justifyContent

export const alignItems = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  baseline: 'baseline',
  strecth: 'strecth',
} as const

export type AlignItems = keyof typeof alignItems
