import React from 'react'
import { Text, Flex } from './components'

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
    </div>
  )
}

export default Homepage
