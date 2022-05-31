import React from 'react'

import { Stack, Box } from './../dist/tenka.es'
import './../dist/reset.css'
import './../dist/style.css'
import './../dist/tenka.css'

const DecoratedBox = ({ label = 'This is box component', ...restProps }) => {
  return (
    <Box
      style={{ backgroundColor: 'rebeccapurple', color: 'white' }}
      px="sm"
      {...restProps}
    >
      {label}
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
