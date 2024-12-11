import styles from "./Button.module.css"
import React, { RefObject } from "react"
import cx, { ClassValue } from "clsx"
import { useButton, FocusRing } from "react-aria"
import { useObjectRef } from "@react-aria/utils"

import { ButtonSprinkles, buttonAtoms, buttonRecipe } from "./Button.css"
import LoaderIcon from "./LoaderIcon"

export interface ButtonProps extends ButtonSprinkles {
  children?: React.ReactNode
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  icon?: React.ReactNode
  as?: React.ElementType
  className?: ClassValue
  isLoading?: Boolean
  isActive?: Boolean
  shape?: "rect" | "square" | "circle" | "pill"
  size?: "compact" | "small" | "medium" | "large"
  width?: "hug" | "full"
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "ghost"
    | "light"
    | "brand"
    | "critical"
    | "danger"
}

export const Button: React.FC<ButtonProps> = React.forwardRef(
  (props, forwardedRef) => {
    const {
      as = "button",
      children,
      className,
      width,
      color,
      size,
      isActive,
      isLoading,
      shape,
      leadingIcon,
      trailingIcon,
      icon,
    } = props

    const Wrapper = as
    const objRef: RefObject<any> = useObjectRef(forwardedRef)

    const atomProps: Record<string, unknown> = {}
    const nativeProps: Record<string, unknown> = {}

    for (const key in props) {
      if (buttonAtoms.properties.has(key as keyof ButtonSprinkles)) {
        atomProps[key] = props[key as keyof typeof props]
      } else {
        nativeProps[key] = props[key as keyof typeof props]
      }
    }

    const { buttonProps, isPressed } = useButton(nativeProps, objRef)

    const sprinklesClasses = buttonAtoms(atomProps)
    const recipeClasses = buttonRecipe({ width, color, size, shape })

    return (
      <FocusRing focusClass="focus" focusRingClass="focus-visible">
        <Wrapper
          ref={objRef}
          className={cx(
            sprinklesClasses,
            recipeClasses,
            isActive && "active",
            isPressed && "pressed",
            className
          )}
          {...buttonProps}
        >
          <span
            className={cx(styles.children, {
              [styles.loading]: isLoading,
              [styles["has-trailing"]]: trailingIcon,
            })}
          >
            {leadingIcon && <div className={styles.leading}>{leadingIcon}</div>}
            {children}
            {icon && <div className={styles.icon}>{icon}</div>}
            {trailingIcon && (
              <div className={styles.trailing}>{trailingIcon}</div>
            )}
          </span>
          {isLoading && (
            <div className={styles["loader-wrapper"]}>
              <LoaderIcon className={styles.loader} />
            </div>
          )}
        </Wrapper>
      </FocusRing>
    )
  }
)

export default Button
