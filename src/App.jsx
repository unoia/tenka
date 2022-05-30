import React from 'react'
import { Box } from './../dist/index.es'

import './styles/reset.css'
import './styles/tenka.css'

const Homepage = () => {
  return (
    <div>
      <Box style={{ backgroundColor: 'salmon' }} padding="ml">
        <Box
          style={{ backgroundColor: 'rebeccapurple', color: 'white' }}
          padding={{
            sphone: 'sm',
            phone: 'ml',
            tablet: 'xl',
            desktop: 'xxl',
          }}
          radius="ml"
        >
          This is box component
        </Box>
      </Box>
    </div>
  )
}

export default Homepage
