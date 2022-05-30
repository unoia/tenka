import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import {
  responsiveProperties,
  unResponsiveProperties,
} from '../../styles/properties'

import { breakpoints, breakpointNames } from '../../styles/tokens'

const staticProps = defineProperties({
  properties: unResponsiveProperties,
})

const responsiveProps = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'sphone',
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    marginX: ['marginInline'],
    mX: ['marginInline'],
    mx: ['marginInline'],
    marginY: ['marginBlock'],
    mY: ['marginBlock'],
    my: ['marginBlock'],
    mT: ['marginTop'],
    mt: ['marginTop'],
    mR: ['marginRight'],
    mr: ['marginRight'],
    mB: ['marginBottom'],
    mb: ['marginBottom'],
    mL: ['marginLeft'],
    ml: ['marginLeft'],
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
    justify: ['justifyContent'],
    align: ['alignItems'],
    radius: ['borderRadius'],
  },
})

export const boxStyles = createSprinkles(staticProps, responsiveProps)
