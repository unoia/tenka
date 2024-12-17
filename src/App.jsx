import React from "react"

import "./../dist/styles/reset.css"
import "./../dist/styles/tenka.css"
import "./../dist/style.css"

import { Box, Inline, Button } from "./../dist/tenka.es"
// import { Button } from "./components"
// import { display } from "./styles/variables"
// import * as styles from "./scoped.module.css"

const ClockIcon = ({ large, small }) => {
  return (
    <svg
      width={large ? "24px" : small ? "16px" : "20px"}
      height={large ? "24px" : small ? "16px" : "20px"}
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block" }}
    >
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
      <path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z" fill="currentColor"></path>
    </svg>
  )
}

const PersonIcon = ({ style }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={style}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
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
      <path
        d="m18.4 12-7.7 10H6.9l7.7-10L6.9 2h3.8l7.7 10Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      style="display: block; height: 16px; width: 16px; fill: currentcolor;"
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1zM4.79 4.57l2.06.06-.57 1.8-.4 1.37-.17.51-.06.14 1.32-.52-.21.8-.2.14-.27.15-.15.08-.34.16c-.29.13-.53.2-.7.2-.28 0-.5-.2-.5-.46v-.14l.02-.08.04-.22.06-.26.07-.3.15-.55.19-.63.13-.44.14-.42.1-.3.11-.25.05-.1-1.1-.06.18-.65zm2.6-2.08.04.06-.4 1.23-1.13-.06.4-1.23z"></path>
    </svg>
  )
}

const ExternalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style="display: block; fill: none; height: 20px; width: 20px; stroke: currentcolor; stroke-width: 3.2px; overflow: visible;"
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <g fill="none">
        <path d="M26 18v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h9M17 4h10a1 1 0 0 1 1 1v10M27 5 11.5 20.5"></path>
      </g>
    </svg>
  )
}

const MinusIcon = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      style="display: block; height: 24px; width: 24px; fill: currentcolor;"
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 2c-7.17970175 0-13 5.82029825-13 13 0 7.1797017 5.82029825 13 13 13 7.1797017 0 13-5.8202983 13-13 0-7.17970175-5.8202983-13-13-13zm8 12v2h-16v-2z"></path>
    </svg>
  )
}

const CameraIcon = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style={{
        display: "block",
        height: 24,
        width: 24,
        fill: "currentcolor",
        ...style,
      }}
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path d="M17.59 2a2 2 0 0 1 1.28.47l.13.12L21.42 5H25a5 5 0 0 1 4.98 4.56l.02.22V24a5 5 0 0 1-4.78 5H7a5 5 0 0 1-5-4.78V10a5 5 0 0 1 4.78-5h3.83L13 2.6a2 2 0 0 1 1.07-.57l.17-.02.18-.01zm0 2h-3.17l-2.97 3H7a3 3 0 0 0-3 2.82V24a3 3 0 0 0 2.82 3H25a3 3 0 0 0 3-2.82V10a3 3 0 0 0-2.82-3h-4.59zM16 9a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM7 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
    </svg>
  )
}

const Homepage = () => {
  return (
    <Box display="grid" gap="ml" padding="xl">
      <div>
        <h2>Hierarchy</h2>
        <Inline pt="ml" space="sm" alignItems="center">
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button tertiary>Tertiary</Button>
          <Button critical>Critical</Button>
        </Inline>
      </div>
      <div>
        <h2>Shapes</h2>
        <Inline pt="ml" space="sm" alignItems="center">
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button tertiary>Tertiary</Button>
          <Button primary>Rect</Button>
          <Button primary pill>
            Pill
          </Button>
          <Button
            square
            primary
            icon={
              <ClockIcon style={{ width: 24, height: 24, display: "block" }} />
            }
            aria-label="Square button"
            tooltip="Square button"
            delay={500}
          />
          <Button
            circle
            primary
            icon={
              <PersonIcon style={{ width: 20, height: 20, display: "block" }} />
            }
            aria-label="Circle button"
            tooltip="Circle button"
            delay={500}
          />
        </Inline>
      </div>
      <div>
        <h2>Sizes</h2>
        <Inline pt="ml" space="sm" alignItems="center">
          <Button primary large>
            Large button
          </Button>
          <Button primary medium>
            Medium button
          </Button>
          <Button primary small>
            Small button
          </Button>
          <Button primary xsmall rect>
            xsmall button
          </Button>
        </Inline>
        <Inline pt="ml" space="sm" alignItems="center">
          <Button secondary pill large>
            Large button
          </Button>
          <Button secondary pill medium>
            Medium button
          </Button>
          <Button secondary pill small>
            Small button
          </Button>
          <Button secondary pill xsmall>
            label
          </Button>
        </Inline>
        <Inline pt="ml" space="sm" alignItems="center">
          <Button secondary pill large leadingIcon={<ClockIcon large />}>
            Set alarm
          </Button>
          <Button secondary pill medium leadingIcon={<ClockIcon />}>
            Set alarm
          </Button>
          <Button secondary pill small leadingIcon={<ClockIcon />}>
            Set alarm
          </Button>
          <Button secondary pill xsmall leadingIcon={<ClockIcon small />}>
            Set alarm
          </Button>
        </Inline>
      </div>
      <Button primary>Primary button</Button>
      <Button>Default button</Button>
      <Button width={["full", "hug"]} isDisabled>
        Default disabled button
      </Button>
      <Button secondary pill width={["full", "hug"]}>
        Secondary pill button
      </Button>
      <Inline space="ml" alignItems="center">
        <Button
          primary
          circle
          large
          aria-label="Set alarm"
          icon={<ClockIcon large />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          primary
          circle
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          primary
          circle
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isLoading
        />
        <Button
          primary
          circle
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          primary
          circle
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isDisabled
        />
        <Button
          primary
          circle
          xsmall
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          secondary
          circle
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          secondary
          circle
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          secondary
          circle
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isDisabled
        />
        <Button
          secondary
          circle
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isLoading
        />
        <Button
          tertiary
          circle
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          tertiary
          circle
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          tertiary
          circle
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isDisabled
        />
        <Button
          tertiary
          circle
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isLoading
        />
      </Inline>
      <Inline space="ml" alignItems="center">
        <Button
          primary
          square
          aria-label="Set alarm"
          large
          icon={<ClockIcon large />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          primary
          square
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          primary
          square
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isLoading
        />
        <Button
          primary
          square
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          primary
          square
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isDisabled
        />
        <Button
          primary
          square
          xsmall
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          primary
          square
          xsmall
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isDisabled
        />
        <Button
          primary
          square
          xsmall
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isLoading
        />
        <Button
          square
          xsmall
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          tertiary
          square
          xsmall
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          secondary
          square
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          secondary
          square
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          secondary
          square
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isDisabled
        />
        <Button
          secondary
          square
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isLoading
        />
        <Button
          tertiary
          square
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          tertiary
          square
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
        />
        <Button
          tertiary
          square
          small
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isDisabled
        />
        <Button
          tertiary
          square
          aria-label="Set alarm"
          icon={<ClockIcon />}
          tooltip="Set reminder"
          delay={500}
          isLoading
        />
      </Inline>
      <Button
        secondary
        width="full"
        leadingIcon={<ClockIcon />}
        tooltip="Set reminder"
        delay={500}
        trailingIcon={<ChevronDownSmall />}
      >
        Secondary button
      </Button>
      <Button
        secondary
        width="full"
        leadingIcon={<PersonIcon />}
        trailingIcon={<ChevronRightIcon />}
      >
        Secondary button
      </Button>
      <Inline space="ml" py="ml" alignItems="center">
        <Button secondary small width={["full", "hug"]} isDisabled>
          Disabled secondary button
        </Button>
        <Button secondary small width={["full", "hug"]} isActive>
          Active secondary button
        </Button>
        <Button secondary small width={["full", "hug"]} isActive isDisabled>
          Disabled active secondary button
        </Button>
        <Button secondary small width={["full", "hug"]} isLoading>
          Small button
        </Button>
      </Inline>
      <Button secondary xsmall width={["full", "hug"]} isLoading>
        xsmall button
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
        variant={{ phone: "primary-inverse", desktop: "primary" }}
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
        variant={{ phone: "primary-inverse", desktop: "primary" }}
        boxShadow="medium-below"
        fontWeight="medium"
      >
        Versatile Box Component
      </Box> */}
    </Box>
  )
}

export default Homepage
