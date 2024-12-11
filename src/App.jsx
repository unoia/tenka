import React from "react"

import "./../dist/styles/reset.css"
import "./../dist/styles/tenka.css"
import "./../dist/style.css"

// import { Box } from "../dist/tenka.es"
// import "./styles/index.css"

import { Box, Inline, Button } from "./../dist/tenka.es"
// import { Button } from "./components"
// import * as styles from "./scoped.module.css"

const ClockIcon = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block" }}
    >
      <title>Clock</title>
      <path
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

const ChevronDownSmall = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block" }}
    >
      <title>Chevron down small</title>
      <path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z" fill="currentColor"></path>
    </svg>
  )
}

const PersonIcon = () => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
      <title>Person</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3H3v-3Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

const ChevronRightIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: "20px", height: "20px", display: "block" }}
    >
      <title>Chevron right</title>
      <path
        d="m18.4 12-7.7 10H6.9l7.7-10L6.9 2h3.8l7.7 10Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

const Homepage = () => {
  return (
    <Box display="grid" gap="xxl" padding="xl">
      <Button color="primary" size="large" width={["full", "hug", "full"]}>
        Primary large button
      </Button>
      <Button color="primary">Primary button</Button>
      <Button>Default button</Button>
      <Button width={["full", "hug"]} isDisabled>
        Default disabled button
      </Button>
      <Button color="secondary" shape="pill" width={["full", "hug"]}>
        Secondary pill button
      </Button>
      <Inline space="ml" alignItems="center" flexWrap="wrap">
        <Button
          color="primary"
          shape="circle"
          aria-label="Set alarm"
          icon={<ClockIcon />}
        />
        <Button
          color="primary"
          shape="circle"
          aria-label="Set alarm"
          icon={<ClockIcon />}
          isLoading
        />
        <Button
          color="primary"
          shape="circle"
          size="small"
          aria-label="Set alarm"
          icon={<ClockIcon />}
        />
        <Button
          color="primary"
          shape="circle"
          size="small"
          aria-label="Set alarm"
          icon={<ClockIcon />}
          isDisabled
        />
        <Button
          color="secondary"
          shape="circle"
          aria-label="Set alarm"
          icon={<ClockIcon />}
        />
        <Button
          color="secondary"
          shape="circle"
          size="small"
          aria-label="Set alarm"
          icon={<ClockIcon />}
        />
        <Button
          color="secondary"
          shape="circle"
          size="small"
          aria-label="Set alarm"
          icon={<ClockIcon />}
          isDisabled
        />
        <Button
          color="secondary"
          shape="circle"
          aria-label="Set alarm"
          icon={<ClockIcon />}
          isLoading
        />
        <Button
          color="tertiary"
          shape="circle"
          aria-label="Set alarm"
          icon={<ClockIcon />}
        />
        <Button
          color="tertiary"
          shape="circle"
          size="small"
          aria-label="Set alarm"
          icon={<ClockIcon />}
        />
        <Button
          color="tertiary"
          shape="circle"
          size="small"
          aria-label="Set alarm"
          icon={<ClockIcon />}
          isDisabled
        />
        <Button
          color="tertiary"
          shape="circle"
          aria-label="Set alarm"
          icon={<ClockIcon />}
          isLoading
        />
      </Inline>
      <Button
        color="secondary"
        width="full"
        leadingIcon={<ClockIcon />}
        trailingIcon={<ChevronDownSmall />}
      >
        Secondary button
      </Button>
      <Button
        color="secondary"
        width="full"
        leadingIcon={<PersonIcon />}
        trailingIcon={<ChevronRightIcon />}
      >
        Secondary button
      </Button>
      <Inline space="ml" py="ml" alignItems="center">
        <Button
          color="secondary"
          size="small"
          width={["full", "hug"]}
          isDisabled
        >
          Disabled secondary button
        </Button>
        <Button color="secondary" size="small" width={["full", "hug"]} isActive>
          Active secondary button
        </Button>
        <Button
          color="secondary"
          size="small"
          width={["full", "hug"]}
          isActive
          isDisabled
        >
          Disabled active secondary button
        </Button>
        <Button
          color="secondary"
          size="small"
          width={["full", "hug"]}
          isLoading
        >
          Small button
        </Button>
      </Inline>
      <Button
        color="secondary"
        size="compact"
        width={["full", "hug"]}
        isLoading
      >
        Compact button
      </Button>
      {/* <Box
        as="section"
        borderRadius="field"
        padding={{ phone: "ml", desktop: "xl" }}
        display={{ phone: "block", desktop: "flex" }}
        alignItems="center"
        justifyContent="center"
        background={{
          phone: "primary-brand",
          tablet: "primary-inverse",
          desktop: "primary",
        }}
        color={{ phone: "primary-inverse", desktop: "primary" }}
        boxShadow="shallow-below"
        fontWeight="medium"
      >
        Versatile Box Component
      </Box>
      <Box
        as="section"
        borderRadius="m"
        padding={{ phone: "ml", desktop: "xl" }}
        display={{ phone: "block", desktop: "flex" }}
        alignItems="center"
        justifyContent="center"
        background={{
          phone: "primary-brand",
          tablet: "primary-inverse",
          desktop: "primary",
        }}
        color={{ phone: "primary-inverse", desktop: "primary" }}
        boxShadow="medium-below"
        fontWeight="medium"
      >
        Versatile Box Component
      </Box> */}
    </Box>
  )
}

export default Homepage
