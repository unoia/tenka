import React from 'react'
import { render, fireEvent, getByTestId } from './../test-utils'

import { Text } from './Text'

test('renders as any HTML element', async () => {
  const { getByTestId } = render(<><Text as="h1" data-testid="heading">Hello</Text>
  <Text as="p" data-testid="paragraph">Hello</Text></>)

  expect(getByTestId("heading").tagName).toBe("H1");
  expect(getByTestId("paragraph").tagName).toBe("P");
})