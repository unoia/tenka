import React from 'react'
import { Stack, Box } from 'tenka'

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
      <p>Hello world</p>
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
