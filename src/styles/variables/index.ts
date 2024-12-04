import {
  accent,
  bgPrimary,
  bgSecondary,
  bgTertiary,
  bgQuartenary,
  brand,
  dark,
  darkHex,
  light,
  lightHex,
  textColors,
  iconColors,
  borderColors,
  pallete,
} from './color'
import { boxShadow } from './box-shadow'
import { breakpoints, breakpointNames, breakpointsValue } from './breakpoints'
import { display } from './display'
import { fontFamily } from './font-family'
import { direction, justifyContent, alignItems, flexWrap } from './flex'
import { width, gutter } from './layout'
import { fontWeight, displays, headings, labels, paragraphs, lineDisplays, lineHeadings, lineLabels, lineParagraphs, } from './typography'
import { radius } from './radius'
import { space } from './space'
import { zIndex } from './z-indices'
import { timing, easing } from './animation'

export {
  accent,
  bgPrimary,
  bgSecondary,
  bgTertiary,
  bgQuartenary,
  brand,
  dark,
  darkHex,
  display,
  flexWrap,
  light,
  lightHex,
  boxShadow,
  breakpoints,
  breakpointNames,
  breakpointsValue,
  fontFamily,
  gutter,
  width,
  space,
  fontWeight,
  zIndex,
  displays,
  headings,
  labels,
  paragraphs,
  timing,
  easing,
  pallete
}

export const variables = {
  "shadow": boxShadow,
  accent,
  "align-items": alignItems,
  bg: { ...bgPrimary, ...bgSecondary, ...bgTertiary, ...bgQuartenary },
  text: textColors,
  icon: iconColors,
  border: borderColors,
  // brand,
  dark,
  // "dark-hex": darkHex,
  direction,
  display,
  "flex-wrap": flexWrap,
  "justify-content": justifyContent,
  light,
  // "light-hex": lightHex,
  "text-size-display": displays,
  "text-line-display": lineDisplays,
  "text-size-heading": headings,
  "text-line-heading": lineHeadings,
  "text-size-label": labels,
  "text-line-label": lineLabels,
  "text-size-paragraph": paragraphs,
  "text-line-paragraph": lineParagraphs,
  "text-weight": fontWeight,
  pallete,
  "font-family": fontFamily,
  gutter,
  radius,
  "space": space,
  "z-index": zIndex,
  timing,
  easing,
}