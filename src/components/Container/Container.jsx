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
      default: {
        '@max-phone': {
          maxWidth: '100%',
          paddingLeft: '$gutter$phone',
          paddingRight: '$gutter$phone',
        },
        '@phone': {
          maxWidth: '100%',
          paddingLeft: '$gutter$phone',
          paddingRight: '$gutter$phone',
        },
        '@tablet': {
          maxWidth: '100%',
          paddingLeft: '$gutter$tablet',
          paddingRight: '$gutter$tablet',
        },
        '@desktop': {
          maxWidth: '$page-width$default',
          paddingLeft: '$gutter$desktop',
          paddingRight: '$gutter$desktop',
        },
      },
      narrow: {
        '@max-phone': {
          maxWidth: '100%',
          paddingLeft: '$gutter$phone',
          paddingRight: '$gutter$phone',
        },
        '@phone': {
          maxWidth: '100%',
          paddingLeft: '$gutter$phone',
          paddingRight: '$gutter$phone',
        },
        '@tablet': {
          maxWidth: '100%',
          paddingLeft: '$gutter$tablet',
          paddingRight: '$gutter$tablet',
        },
        '@desktop': {
          maxWidth: '$page-width$small',
          paddingLeft: '$gutter$desktop',
          paddingRight: '$gutter$desktop',
        },
      },
      post: {
        '@max-phone': {
          maxWidth: '100%',
          paddingLeft: '$gutter$phone',
          paddingRight: '$gutter$phone',
        },
        '@phone': {
          maxWidth: '100%',
          paddingLeft: '$gutter$phone',
          paddingRight: '$gutter$phone',
        },
        '@tablet': {
          maxWidth: '100%',
          paddingLeft: '$gutter$tablet',
          paddingRight: '$gutter$tablet',
        },
        '@landscape-tablet': {
          maxWidth: '$page-width$xsmall',
          paddingLeft: '$gutter$tablet',
          paddingRight: '$gutter$tablet',
        },
        '@desktop': {
          maxWidth: '$page-width$xsmall',
          paddingLeft: '$gutter$desktop',
          paddingRight: '$gutter$desktop',
        },
      },
      bleed: {
        maxWidth: '100%',
      },
    },
  },
  defaultVariants: {
    area: 'default',
  },
})

export default Container
