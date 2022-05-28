import React from 'react'
import { Text, Box, Stack, Inline } from './components'

import './styles/reset.css'
import './styles/tenka.css'

const DecoratedBox = () => {
  return (
    <Box
      padding={{
        '@initial': 's',
        '@tablet': 'm',
        '@desktop': 'l',
      }}
      style={{ backgroundColor: 'salmon' }}
    >
      <Text heading4 as="p" style={{ backgroundColor: 'rebeccapurple' }} white>
        Hello world
      </Text>
    </Box>
  )
}

const Homepage = () => {
  return (
    <div>
      <Stack
        mx={{ '@phone': 'ml', '@tablet': 'xl' }}
        space={{ '@initial': 's', '@phone': 'ml', '@tablet': 'xl' }}
      >
        <DecoratedBox />
        <DecoratedBox />
        <DecoratedBox />
        <DecoratedBox />
        <DecoratedBox />
        <DecoratedBox />
      </Stack>
    </div>
  )
}

export default Homepage
