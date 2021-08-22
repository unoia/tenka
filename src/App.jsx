import React from 'react'
import { Text, Flex } from './components'
import Container from './components/Container/Container'

import './styles/reset.css'
import './styles/tenka.css'

const Box = ({ color }) => {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        backgroundColor: color ?? 'rebeccapurple',
      }}
    />
  )
}

const Block = ({ color }) => {
  return <div style={{ width: '100%', height: 48, backgroundColor: color }} />
}

const Homepage = () => {
  const [counter, setCounter] = React.useState(0)

  return (
    <div>
      <Text display2 info as="h1">
        {counter}
      </Text>
      <button onClick={() => setCounter((c) => c + 1)}>Click!</button>

      <Flex
        justify={{
          '@initial': 'start',
          '@phone': 'center',
          '@tablet': 'start',
          '@desktop': 'between',
        }}
      >
        <Box color="coral" />
        <Box color="skyblue" />
        <Box color="salmon" />
        <Box color="navy" />
      </Flex>

      <br />
      <br />

      <Container
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
    </div>
  )
}

export default Homepage
