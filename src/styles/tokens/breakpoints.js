/*
  Breakpoints
*/

import { width } from './layout'

export const breakpointNames = [
  'small-phone',
  'phone',
  'tablet',
  'tablet-landscape',
  'desktop',
  'wide',
]

export const breakpoints = {
  'small-phone': {},
  'only-phone': {
    '@media': `screen and (min-width: ${width.min[420]}) and (max-width: ${width.max[720]})`,
  },
  'max-phone': { '@media': `screen and (max-width: ${width.max[420]})` },
  phone: { '@media': `screen and (min-width: ${width.min[420]})` },
  'only-tablet': {
    '@media': `screen and (min-width: ${width.min[720]}) and (max-width:${width.max[1024]})`,
  },
  'max-tablet': { '@media': `screen and (max-width: ${width.max[720]})` },
  tablet: { '@media': `screen and (min-width: ${width.min[720]})` },
  'only-tablet-landscape': {
    '@media': `screen and (min-width: ${width.min[840]}) and (max-width: ${width.max[1024]})`,
  },
  'max-tablet-landscape': {
    '@media': `screen and (max-width: ${width.max[840]})`,
  },
  'tablet-landscape': { '@media': `screen and (min-width: ${width.min[840]})` },
  'only-desktop': {
    '@media': `screen and (min-width: ${width.min[1024]}) and (max-width: ${width.max[1536]})`,
  },
  'max-desktop': { '@media': `screen and (max-width: ${width.max[1024]})` },
  desktop: { '@media': `screen and (min-width: ${width.min[1024]})` },
  'max-wide': { '@media': `screen and (max-width: ${width.max[1536]})` },
  wide: { '@media': `screen and (min-width: ${width.min[1536]})` },
}
