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
import { fontFamily } from './font-family'
import { gutter } from './gutter'
import { width } from './layout'
import { radius } from './radius'
import { size } from './size'
import { space } from './space'
import { weight } from './weight'
import { zIndex, layer } from './zIndices'
import { display } from './display'

export {
  display,
  accent,
  bg,
  brand,
  dark,
  darkHex,
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
  breakpoints,
  accent,
  display,
  bg,
  brand,
  dark,
  'dark-hex': darkHex,
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
