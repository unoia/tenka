import React from 'react'
import { render } from '@testing-library/react'
import TenkaProvider from './TenkaProvider/TenkaProvider'

const AllTheProviders = ({ children }) => {
  return <TenkaProvider>{children}</TenkaProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
