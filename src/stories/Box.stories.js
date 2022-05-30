import React from 'react'
import Box from '../components/Box/Box'

export default {
  component: Box,
  title: 'Layouts/Box',
  argTypes: {
    padding: {
      options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
      control: { type: 'select' },
    },
    py: {
      options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
      control: { type: 'select' },
    },
    px: {
      options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
      control: { type: 'select' },
    },
    pt: {
      options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
      control: { type: 'select' },
    },
    pr: {
      options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
      control: { type: 'select' },
    },
    pb: {
      options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
      control: { type: 'select' },
    },
    pl: {
      options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
      control: { type: 'select' },
    },
  },
}

export const BoxWithPadding = ({ padding, py, px, pt, pr, pb, pl }) => (
  <Box
    style={{ backgroundColor: 'rebeccapurple', color: '#ffffff' }}
    padding={padding}
    py={py}
    px={px}
    pt={pt}
    pr={pr}
    pb={pb}
    pl={pl}
  >
    This box has padding
  </Box>
)
