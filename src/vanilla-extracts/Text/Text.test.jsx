import React from 'react'
import { render, fireEvent, getByTestId } from './../test-utils'

import { Text } from './Text'

describe('Rendering', () => {
  test('renders as any HTML element', async () => {
    const { getByTestId } = render(
      <>
        <Text as="h1" data-testid="heading">
          Hello
        </Text>
        <Text as="p" data-testid="paragraph">
          Hello
        </Text>
      </>
    )

    expect(getByTestId('heading').tagName).toBe('H1')
    expect(getByTestId('paragraph').tagName).toBe('P')
  })

  test('default element to be a <span />', () => {
    const { getByTestId } = render(<Text data-testid="text">Hello</Text>)
    expect(getByTestId('text').tagName).toBe('SPAN')
  })

  test('should render the text', async () => {
    let text = 'This is the rendered text'
    const { getByTestId } = render(<Text data-testid="text">{text}</Text>)

    expect(getByTestId('text')).toHaveTextContent(text)
  })
})
