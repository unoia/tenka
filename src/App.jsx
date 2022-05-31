import React from 'react'

import { Stack, Box } from './../dist/tenka.es'
import './../dist/styles/reset.css'
import './../dist/styles/tenka.css'

const DecoratedBox = ({
  label = 'Hello, there! General kenobi. This one is masbul!',
  ...restProps
}) => {
  return (
    <Box
      style={{ backgroundColor: 'rebeccapurple', color: 'white' }}
      px="sm"
      {...restProps}
    >
      <h1>{label}</h1>
    </Box>
  )
}

const Homepage = () => {
  return (
    <div>
      <Stack
        style={{ backgroundColor: 'salmon' }}
        space={{
          sphone: 's',
          phone: 'm',
          tablet: 'xl',
          desktop: 'xxxl',
          wide: 'huge',
        }}
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
