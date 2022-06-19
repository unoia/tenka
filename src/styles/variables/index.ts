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
import { breakpoints, breakpointNames, breakpointsValue } from './breakpoints'
import { display } from './display'
import { fontFamily } from './font-family'
import { direction, justifyContent, alignItems, flexWrap } from './flex'
import { width, gutter } from './layout'
import { lineHeight, fontSize, fontWeight, } from './typography'
import { radius } from './radius'
import { space } from './space'
import { zIndex } from './z-indices'

export {
  accent,
  bg,
  brand,
  dark,
  darkHex,
  display,
  flexWrap,
  light,
  lightHex,
  tone,
  boxShadow,
  breakpoints,
  breakpointNames,
  breakpointsValue,
  fontFamily,
  gutter,
  width,
  fontSize,
  lineHeight,
  space,
  fontWeight,
  zIndex,
}

export const variables = {
  "box-shadow": boxShadow,
  accent,
  "align-items": alignItems,
  bg,
  brand,
  dark,
  "dark-hex": darkHex,
  direction,
  display,
  "flex-wrap": flexWrap,
  "justify-content": justifyContent,
  light,
  "light-hex": lightHex,
  "size": fontSize,
  "line-height": lineHeight,
  "weight": fontWeight,
  tone,
  "font-family": fontFamily,
  gutter,
  width,
  radius,
  "space": space,
  "z-index": zIndex,
}