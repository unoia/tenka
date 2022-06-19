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
import { breakpoints, breakpointNames, breakpointsAlt } from './breakpoints'
import { display } from './display'
import { fontFamily } from './font-family'
import { direction, justifyContent, alignItems, flexWrap } from './flex'
import { width, gutter } from './layout'
import { lineHeight, fontSize, fontWeight } from './typography'
import { radius } from './radius'
import { space } from './space'
import { zIndex, layer } from './z-indices'
import { foreground } from './foreground'

export {
  accent,
  bg,
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
  breakpointsAlt,
  fontFamily,
  gutter,
  width,
  radius,
  fontSize,
  lineHeight,
  space,
  fontWeight,
  zIndex,
}

export const variables = {
  // boxShadow,
  accent,
  "align-items": alignItems,
  bg,
  brand,
  dark,
  "dark-hex": darkHex,
  direction,
  display,
  "flex-wrap": flexWrap,
  // foreground,
  "justify-content": justifyContent,
  light,
  "light-hex": lightHex,
  "size": fontSize,
  "line-height": lineHeight,
  "weight": fontWeight,
  tone,
  // fontFamily,
  gutter,
  width,
  // radius,
  "space": space,
  // layer,
  // zIndex,
}