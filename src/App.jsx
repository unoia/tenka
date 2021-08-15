import React from 'react';
import { Text, Flex } from './components';

import './styles/reset.css'
import './styles/tenka.css'

const Homepage = () => {

  const [counter, setCounter] = React.useState(0)

  return (
    <div>
      <Text display2 info as="h1">{counter}</Text>
      <button onClick={() => setCounter(c => c + 1)}>Click!</button>

      <Flex justify={{ "@initial": "start", '@phone': 'center', '@tablet': 'end', '@desktop': 'start', '@wide': 'end'}}>
        <Text heading6 as="p">item-1</Text>
        <Text heading6 as="p">item-2</Text>
        <Text heading6 as="p">item-3</Text>
      </Flex>
    </div>
  )
}

export default Homepage