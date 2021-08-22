// import styles from './Flex.module.css';
import React from 'react'
import { styled } from './../../stitches.config'

import { Box } from '../Box/Box'

export const Flex = styled(Box, {
  display: 'flex',
  variants: {
    align: {
      start: { alignItems: 'flex-start' },
      end: { alignItems: 'flex-end' },
      center: { alignItems: 'center' },
      baseline: { alignItems: 'baseline' },
      stretch: { alignItems: 'stretch' },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      end: { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
      evenly: { justifyContent: 'space-evenly' },
    },
    direction: {
      row: { flexDirection: 'row' },
      'row-reverse': { flexDirection: 'row-reverse' },
      column: { flexDirection: 'column' },
      'column-reverse': { flexDirection: 'column-reverse' },
    },
    wrap: {
      wrap: { flexWrap: 'wrap' },
      nowrap: { flexWrap: 'nowrap' },
      'wrap-reverse': { flexWrap: 'wrap-reverse' },
    },
  },
})

export default Flex
