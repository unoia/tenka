import React from 'react'
import { render, fireEvent } from './../test-utils'

import { Inline } from './Inline'

test('renders as any HTML element', async () => {
  const { getByTestId } = render(<><Inline as="main" data-testid="main">Hello</Inline>
  <Inline as="section" data-testid="section">Hello</Inline></>)

  expect(getByTestId("main").tagName).toBe("MAIN");
  expect(getByTestId("section").tagName).toBe("SECTION");
})