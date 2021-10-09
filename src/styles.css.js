import {
  createGlobalTheme, createGlobalThemeContract
} from '@vanilla-extract/css'

import { variables } from './styles/tokens'

export const tokens = createGlobalThemeContract(
  variables,
  (_value, path) => `tenka-${path.join('-')}`
)

createGlobalTheme(':root', tokens, variables)
