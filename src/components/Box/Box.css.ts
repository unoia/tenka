import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import {
  responsiveProperties,
  unresponsiveProperties,
} from '../../styles/atomicProperties'

import { breakpoints, breakpointNames } from '../../styles/variables'

const staticProps = defineProperties({
  properties: unresponsiveProperties,
})

const responsiveAtomicProperties = defineProperties({
  defaultCondition: 'sphone',
  conditions: breakpoints,
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    spacex: ['columnGap'],
    spacey: ['rowGap'],
    marginX: ['marginInline'],
    marginY: ['marginBlock'],
    mx: ['marginInline'],
    my: ['marginBlock'],
    mt: ['marginTop'],
    mr: ['marginRight'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    paddingX: ['paddingInline'],
    px: ['paddingInline'],
    paddingY: ['paddingBlock'],
    py: ['paddingBlock'],
    pt: ['paddingTop'],
    pr: ['paddingRight'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    justify: ['justifyContent'],
    align: ['alignItems'],
    radius: ['borderRadius'],
  },
})

export const boxStyles = createSprinkles(staticProps, responsiveAtomicProperties)

export type BoxSprinkles = Parameters<typeof boxStyles>[0];