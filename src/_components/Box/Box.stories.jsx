import React from 'react'
import { Box } from './../../../dist/index.es'

export default {
  component: Box,
  title: 'Layout/Box',
}

export const BoxWithStyle = () => {
  return (
    <Box
      style={{
        backgroundColor: 'salmon',
        color: 'white',
        fontWeight: 'bold',
      }}
      padding="sm"
      display={{
        phone: 'inline-flex',
        tablet: 'block',
      }}
      radius="ml"
    >
      <Box style={{ backgroundColor: 'rebeccapurple' }}>Something</Box>
    </Box>
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
