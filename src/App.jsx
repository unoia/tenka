import React from 'react'
import { Text, Box } from './components'

import './styles/reset.css'
import './styles/tenka.css'

const Homepage = () => {
  return (
    <div>
      {/* <Container
        area={{
          '@desktop': 'post',
          '@wide': 'narrow',
        }}
      >
        <Block color="maroon" />
      </Container>
      <Container area="narrow">
        <Block color="salmon" />
      </Container>
      <Container area="bleed">
        <Block color="navy" />
      </Container>
      <Container>
        <Block color="rebeccapurple" />
      </Container>

      <br />
      <br /> */}

      <section>
        <Box
          my={['xs', 'ml', 'xl']}
          px={['xs', 'xs', 'xl']}
          style={{ backgroundColor: 'salmon' }}
        >
          <Text
            heading4
            as="p"
            style={{ backgroundColor: 'rebeccapurple' }}
            white
          >
            Hello world
          </Text>
        </Box>
        <Box
          my={['xs', 'ml', 'xl']}
          px={['xs', 'xs', 'xl']}
          style={{ backgroundColor: 'salmon' }}
          display="inline-flex"
          radius={{ phone: 'full', desktop: 's' }}
          maxWidth="full"
        >
          <Text heading4 style={{ backgroundColor: 'rebeccapurple' }} white>
            Bye World
          </Text>
          <Text heading4 style={{ backgroundColor: 'coral' }} white>
            Bye World
          </Text>
        </Box>
      </section>
    </div>
  )
}

export default Homepage
