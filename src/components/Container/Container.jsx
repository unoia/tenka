// import styles from './Container.module.scss'
import React from 'react'

import { styled } from './../../stitches.config'
import { Box } from '..'

export const Container = styled(Box, {
  width: '100%',
  flexGrow: 1,
  marginLeft: 'auto',
  marginRight: 'auto',
  variants: {
    area: {
      default: {},
      narrow: {},
      post: {},
      bleed: {},
    },
  },
})

export default Container
