import React from "react"

import "./styles/index.css"
// import "./../dist/style.css"

// import { Box } from "../dist/tenka.es"
import { Box } from "./components/Box"

// import 'tenka/style.css'
// import 'tenka/tenka.css'
// import 'tenka/reset.css'

const Homepage = () => {
  return (
    <>
      <Box
        padding={{ tablet: "sm", desktop: "xl" }}
        display="block"
        backgroundColor={{ mobile: "primary-plus", desktop: "primary-luxe" }}
        color="primary-inverse"
      >
        Hello world
      </Box>
    </>
  )
}

export default Homepage
