import {
  accent,
  bg,
  brand,
  dark,
  darkHex,
  light,
  lightHex,
  tone,
} from './color'
import { boxShadow } from './box-shadow'
import { breakpoints, breakpointNames } from './breakpoints'
import { display } from './display'
import { fontFamily } from './font-family'
import { direction, justifyContent, alignItems, flexWrap } from './flex'
import { gutter } from './gutter'
import { width } from './layout'
import { radius } from './radius'
import { size } from './size'
import { space } from './space'
import { weight } from './weight'
import { zIndex, layer } from './zIndices'
import { background } from './background'
import { foreground } from './foreground'

export {
  accent,
  bg,
  background,
  brand,
  dark,
  darkHex,
  display,
  flexWrap,
  foreground,
  light,
  lightHex,
  tone,
  breakpointNames,
  layer,
  boxShadow,
  breakpoints,
  fontFamily,
  gutter,
  width,
  radius,
  size,
  space,
  weight,
  zIndex,
}

export const variables = {
  'box-shadow': boxShadow,
  accent,
  'align-items': alignItems,
  bg,
  background,
  brand,
  dark,
  'dark-hex': darkHex,
  direction,
  display,
  'flex-wrap': flexWrap,
  foreground,
  'justify-content': justifyContent,
  light,
  'light-hex': lightHex,
  tone,
  'font-family': fontFamily,
  gutter,
  width,
  radius,
  size,
  space,
  weight,
  layer,
  'z-index': zIndex,
}
