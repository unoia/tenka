import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'

import { variables } from './styles/variables'

export const tokens = createGlobalThemeContract(
  variables,
  (_value, path) => `tenka-${path.join('-')}`
)

createGlobalTheme(':root', tokens, variables)
