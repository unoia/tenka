import styles from "./Button.module.css"
import React, { ForwardedRef, RefObject, useRef } from "react"
import cx from "clsx"
import { useButton, FocusRing } from "react-aria"
import { useObjectRef, mergeRefs } from "@react-aria/utils"
import { useTooltipTrigger, useTooltip, mergeProps } from "react-aria"
import { useTooltipTriggerState } from "react-stately"
import type { TooltipProps } from "@react-types/tooltip"
import { omit } from "lodash"
import {
  useFloating,
  offset,
  useMergeRefs,
  arrow,
  FloatingArrow,
  flip,
  autoUpdate,
} from "@floating-ui/react"

import { ButtonSprinkles, buttonAtoms, buttonRecipe } from "./Button.css"
import LoaderIcon from "./LoaderIcon"
import { ButtonProps } from "./buttonTypes"
import {
  parseButtonProps,
  shapes,
  sizes,
  variants,
} from "./lib/parseButtonProps"
interface Tooltip extends TooltipProps {
  children?: React.ReactNode
  placement?: "top" | "bottom" | "left" | "right"
  state?: any
  context?: any
}

const Tooltip = React.forwardRef(
  (
    { state, placement, ...props }: Tooltip,
    forwardedRef: React.ForwardedRef<HTMLElement>
  ) => {
    let { tooltipProps } = useTooltip(props, state)

    return (
      <span
        ref={forwardedRef}
        className={styles.tooltip}
        data-placement={placement ?? "top"}
        {...mergeProps(props, tooltipProps)}
      >
        {props?.children}
      </span>
    )
  }
)

export const Button = React.forwardRef(
  (props: ButtonProps, forwardedRef: React.ForwardedRef<any>) => {
    const booleanProps = parseButtonProps(props)
    const newProps = {
      ...omit(props, [...sizes, ...shapes, ...variants]),
      ...booleanProps,
    }

    const {
      as = "button",
      children,
      className,
      width,
      variant,
      size,
      isActive,
      isLoading,
      isDisabled,
      shape,
      leadingIcon,
      trailingIcon,
      icon,
      overlap,
      tooltip,
      tooltipArrow,
      tooltipPlacement = "top",
    } = newProps

    const arrowRef = useRef(null)
    const { refs, floatingStyles, context } = useFloating({
      placement: tooltipPlacement,
      whileElementsMounted: autoUpdate,
      middleware: [
        flip(),
        offset(8),
        tooltipArrow && arrow({ element: arrowRef }),
      ],
    })

    const Wrapper = as
    const objRef: RefObject<any> = useObjectRef(forwardedRef)

    const atomProps: Record<string, unknown> = {}
    const nativeProps: Record<string, unknown> = {}

    for (const key in newProps) {
      if (buttonAtoms.properties.has(key as keyof ButtonSprinkles)) {
        atomProps[key] = newProps[key as keyof typeof newProps]
      } else {
        nativeProps[key] = newProps[key as keyof typeof newProps]
      }
    }

    const { buttonProps, isPressed } = useButton(nativeProps, objRef)
    let state = useTooltipTriggerState(nativeProps)

    let { triggerProps, tooltipProps } = useTooltipTrigger(
      nativeProps,
      state,
      objRef
    )

    const sprinklesClasses = buttonAtoms(atomProps)
    const recipeClasses = buttonRecipe({ width, variant, size, shape })

    const mergedRef = useMergeRefs([objRef, refs.setReference])

    return (
      <FocusRing focusClass="focus" focusRingClass="focus-visible">
        <Wrapper
          ref={mergedRef}
          className={cx(
            sprinklesClasses,
            recipeClasses,
            isActive && "active",
            isPressed && "pressed",
            { [`overlap-${overlap}`]: overlap },
            className
          )}
          {...mergeProps(buttonProps, triggerProps)}
        >
          <div
            className={cx(styles.children, {
              [styles.loading]: isLoading,
            })}
          >
            {(leadingIcon || children) && (
              <span className={styles["leading-wrapper"]}>
                {leadingIcon && (
                  <div className={styles.leading}>{leadingIcon}</div>
                )}
                {children}
              </span>
            )}
            {icon && <div className={styles.icon}>{icon}</div>}
            {trailingIcon && (
              <div className={styles.trailing}>{trailingIcon}</div>
            )}
          </div>
          {isLoading && (
            <div className={styles["loader-wrapper"]}>
              <LoaderIcon className={styles.loader} />
            </div>
          )}
          {state?.isOpen && tooltip && !isLoading && !isDisabled && (
            <div
              className={styles.tooltip}
              ref={refs.setFloating}
              style={floatingStyles}
              {...tooltipProps}
              // {...mergeProps(tooltipProps, {
              //   placement: props?.tooltipPlacement,
              // })}
            >
              {tooltipArrow && (
                <FloatingArrow ref={arrowRef} context={context} />
              )}
              {tooltip}
            </div>
          )}
        </Wrapper>
      </FocusRing>
    )
  }
)

export default Button
