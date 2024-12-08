import React from 'react'
import { Stack } from '../../../dist/index.es'

export default {
  component: Stack,
  title: 'Layout/Stack',
}

export const StackWithSpace = () => {
  return (
    <Stack
      style={{
        backgroundColor: 'salmon',
        color: 'white',
        fontWeight: 'bold',
      }}
      padding="sm"
    >
      <Box padding="s" style={{ backgroundColor: 'rebeccapurple' }}>
        Something
      </Box>
      <Box padding="s" style={{ backgroundColor: 'rebeccapurple' }}>
        Something
      </Box>
      <Box padding="s" style={{ backgroundColor: 'rebeccapurple' }}>
        Something
      </Box>
      <Box padding="s" style={{ backgroundColor: 'rebeccapurple' }}>
        Something
      </Box>
    </Stack>
  )
}

// export default {
//   component: Box,
//   title: 'Layouts/Box',
//   argTypes: {
//     padding: {
//       options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
//       control: { type: 'select' },
//     },
//     py: {
//       options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
//       control: { type: 'select' },
//     },
//     px: {
//       options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
//       control: { type: 'select' },
//     },
//     pt: {
//       options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
//       control: { type: 'select' },
//     },
//     pr: {
//       options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
//       control: { type: 'select' },
//     },
//     pb: {
//       options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
//       control: { type: 'select' },
//     },
//     pl: {
//       options: ['xxs', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
//       control: { type: 'select' },
//     },
//   },
// }

// export const BoxWithPadding = ({ padding, py, px, pt, pr, pb, pl }) => (
//   <Box padding={padding} py={py} px={px} pt={pt} pr={pr} pb={pb} pl={pl}>
//     This box has padding
//   </Box>
// )
