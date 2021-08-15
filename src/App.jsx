import React from 'react';
import { Text } from './components';

import './styles/reset.css'
import './styles/tenka.css'

const Homepage = () => {

  const [counter, setCounter] = React.useState(0)

  return (
    <div>
      <Text display2 info center as="h1">{counter}</Text>
      <button onClick={() => setCounter(c => c + 1)}>Click!</button>
    </div>
  )
}

export default Homepage