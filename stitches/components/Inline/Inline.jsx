import { styled } from '../../stitches.config'
import { Box } from '../Box'

export const Inline = styled(Box, {
  defaultVariants: {
    display: 'flex',
  },
  variants: {
    display: {
      flex: { display: 'flex' },
      'inline-flex': { display: 'inline-flex' },
    },
    space: {
      xxs: { columnGap: '$space$xxs' },
      xs: { columnGap: '$space$xs' },
      s: { columnGap: '$space$s' },
      sm: { columnGap: '$space$sm' },
      m: { columnGap: '$space$m' },
      ml: { columnGap: '$space$ml' },
      l: { columnGap: '$space$l' },
      xl: { columnGap: '$space$xl' },
      xxl: { columnGap: '$space$xxl' },
      xxxl: { columnGap: '$space$xxxl' },
      huge: { columnGap: '$space$huge' },
      field: { columnGap: '$space$field' },
    },
  },
})

Inline.displayName = 'Inline'

export default Inline
