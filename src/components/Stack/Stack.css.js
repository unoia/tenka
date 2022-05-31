import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { breakpoints, breakpointNames } from '../../styles/tokens'

const responsiveProperties = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'sphone',
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  properties: {
    rowGap: tokens['space'],
  },
})

export const stackStyles = createSprinkles(responsiveProperties)
