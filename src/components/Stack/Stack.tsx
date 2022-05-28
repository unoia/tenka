import { styled } from '../../stitches.config'
import { Box } from '../Box'

export const Stack = styled(Box, {
  display: 'grid',
  variants: {
    space: {
      xxs: { rowGap: '$space$xxs' },
      xs: { rowGap: '$space$xs' },
      s: { rowGap: '$space$s' },
      sm: { rowGap: '$space$sm' },
      m: { rowGap: '$space$m' },
      ml: { rowGap: '$space$ml' },
      l: { rowGap: '$space$l' },
      xl: { rowGap: '$space$xl' },
      xxl: { rowGap: '$space$xxl' },
      xxxl: { rowGap: '$space$xxxl' },
      huge: { rowGap: '$space$huge' },
      field: { rowGap: '$space$field' },
    },
  },
})

Stack.displayName = 'Stack'

export default Stack
