import React from 'react'

import { Box, Stack, Inline } from 'tenka'
import 'tenka/dist/styles/reset.css'
import 'tenka/dist/styles/tenka.css'

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
      <h3>{label}</h3>
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
