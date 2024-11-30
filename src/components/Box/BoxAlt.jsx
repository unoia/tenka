import clsx from "clsx"
import React, { createElement, forwardRef, useEffect } from "react"
import dedent from "dedent"
import { base as baseReset } from "../../css/reset/reset.css"
import { atoms } from "../../css/atoms/atoms"
import { sprinkles } from "../../css/atoms/sprinkles.css"
import { ColoredBox } from "./ColoredBox"
import buildDataAttributes from "./buildDataAttributes"

export const Box = forwardRef(
  (
    { component = "div", className, background, boxShadow, data, ...restProps },
    ref
  ) => {
    const atomProps = {}
    const nativeProps = {
      ...(data
        ? // Not validating rest props as Box supports native HTML element props
          // and we do not want to warn against using the native syntax.
          buildDataAttributes({ data, validateRestProps: false })
        : undefined),
    }

    for (const key in restProps) {
      if (sprinkles.properties.has(key)) {
        atomProps[key] = restProps[key]
      } else {
        nativeProps[key] = restProps[key]
      }
    }

    const userClasses = clsx(className)

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        if (userClasses.includes(baseReset)) {
          throw new Error(
            dedent`
              Reset class has been applied more than once. This is normally caused when asking for an explicit reset on the \`atoms\` function. This can be removed as Box automatically adds reset classes.

              atoms({
                reset: '...' // <-- Remove this
              })
            `
          )
        }
      }, [userClasses])
    }

    const atomicClasses = atoms({
      reset: typeof component === "string" ? component : "div",
      ...atomProps,
    })

    const combinedClasses = `${atomicClasses}${
      userClasses ? ` ${userClasses}` : ""
    }`

    return background || boxShadow ? (
      <ColoredBox
        component={component}
        background={background}
        boxShadow={boxShadow}
        className={combinedClasses}
        ref={ref}
        {...nativeProps}
      />
    ) : (
      createElement(component, {
        className: combinedClasses,
        ...nativeProps,
        ref,
      })
    )
  }
)

Box.displayName = "Box"

export const PublicBox = forwardRef((props, ref) => {
  if (process.env.NODE_ENV !== "production") {
    if (
      typeof props.background !== "undefined" &&
      typeof props.background !== "string"
    ) {
      throw new Error("Conditional backgrounds are not suppported")
    }

    if (
      typeof props.boxShadow !== "undefined" &&
      typeof props.boxShadow !== "string"
    ) {
      throw new Error("Conditional boxShadows are not suppported")
    }
  }
  return <Box {...props} ref={ref} />
})

PublicBox.displayName = "Box"
