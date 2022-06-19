import { defineProperties, createSprinkles, } from '@vanilla-extract/sprinkles'
import { tokens } from '../../styles.css'

export const responsiveProps = defineProperties({
  properties: {
    fontWeight: tokens.weight,
    fontSize: tokens.size,
    lineHeight: tokens['line-height']
  },
})

export const textStyles = createSprinkles(responsiveProps)
