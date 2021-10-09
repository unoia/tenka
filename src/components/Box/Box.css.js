// import { recipe } from '@vanilla-extract/recipes'
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import {
  breakpoints,
  space,
  display,
  breakpointNames,
} from '../../styles/tokens'

const displayStyles = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'small-phone',
  responsiveArray: breakpointNames,
  properties: {
    display: display,
  },
})

const marginStyles = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'small-phone',
  responsiveArray: breakpointNames,
  properties: {
    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    marginInline: space,
    marginBlock: space,
  },
  shorthands: {
    marginX: ['marginInline'],
    mX: ['marginInline'],
    mx: ['marginInline'],
    marginY: ['marginBlock'],
    mY: ['marginBlock'],
    my: ['marginBlock'],
    mT: ['marginTom'],
    mt: ['marginTom'],
    mR: ['marginRight'],
    mr: ['marginRight'],
    mB: ['marginBottom'],
    mb: ['marginBottom'],
    mL: ['marginLeft'],
    ml: ['marginLeft'],
  },
})

const paddingStyles = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'small-phone',
  responsiveArray: breakpointNames,
  properties: {
    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    paddingInline: space,
    paddingBlock: space,
  },
  shorthands: {
    paddingX: ['paddingInline'],
    pX: ['paddingInline'],
    px: ['paddingInline'],
    paddingY: ['paddingBlock'],
    pY: ['paddingBlock'],
    py: ['paddingBlock'],
    pT: ['paddingTop'],
    pt: ['paddingTop'],
    pR: ['paddingRight'],
    pr: ['paddingRight'],
    pB: ['paddingBottom'],
    pb: ['paddingBottom'],
    pL: ['paddingLeft'],
    pl: ['paddingLeft'],
  },
})

export const boxStyles = createSprinkles(
  displayStyles,
  paddingStyles,
  marginStyles
)
