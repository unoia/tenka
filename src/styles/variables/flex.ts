/*
 *
 * Flex properties
 */

export const direction = {
  row: 'row',
  'row-reverse': 'row-reverse',
  column: 'column',
  'column-reverse': 'column-reverse',
} as const

export const flexWrap = {
  wrap: 'wrap',
  noWrap: 'nowrap',
} as const

export const justifyContent = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
} as const

export const alignItems = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  baseline: 'baseline',
  strecth: 'strecth',
} as const
