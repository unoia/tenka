import React from 'react'
import { render, fireEvent } from './../test-utils'

import { Stack } from './Stack'

test('renders as any HTML element', async () => {
  const { getByTestId } = render(<><Stack as="main" data-testid="main">Hello</Stack>
  <Stack as="section" data-testid="section">Hello</Stack></>)

  expect(getByTestId("main").tagName).toBe("MAIN");
  expect(getByTestId("section").tagName).toBe("SECTION");
})