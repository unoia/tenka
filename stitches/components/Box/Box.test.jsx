import React from 'react'
import { render, fireEvent } from '../test-utils'

import { Box } from './Box'

test('renders as any HTML element', async () => {
  const { getByTestId } = render(
    <>
      <Box as="main" data-testid="main">
        Hello
      </Box>
      <Box as="section" data-testid="section">
        Hello
      </Box>
    </>
  )

  expect(getByTestId('main').tagName).toBe('MAIN')
  expect(getByTestId('section').tagName).toBe('SECTION')
})
