import React from "react"

import "./styles/index.css"

import { Box } from "./components/Box"

// import 'tenka/style.css'
// import 'tenka/tenka.css'
// import 'tenka/reset.css'

const Homepage = () => {
  return (
    <>
      <Box
        padding="sm"
        backgroundColor={{ mobile: "primary", desktop: "secondary" }}
        color="secondary"
      >
        Hello world
      </Box>
    </>
  )
}

export default Homepage
