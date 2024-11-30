import React from "react"

import { css } from "../../../styled-system/css"
import { token } from "../../../styled-system/tokens"

export const Text = ({
  as,
  children,
  textStyle,
  weight,
  size,
  className,
  color,
  ...restProps
}) => {
  const Component = as ?? "span"

  return (
    <Component
      className={css({
        textStyle: "large",
      })}
    >
      {children}
    </Component>
  )
}

export default Text
