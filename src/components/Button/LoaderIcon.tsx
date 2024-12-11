import React from "react"
import cx, { ClassValue } from "clsx"

export interface IconProps {
  className?: ClassValue
  style?: any
}

const LoaderIcon: React.FC<IconProps> = ({ className, style }) => {
  return (
    <svg
      className={cx(className)}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
      style={style}
    >
      <circle fill="currentColor" stroke="none" cx="25" cy="50" r="7.5">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="currentColor" stroke="none" cx="50" cy="50" r="7.5">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="currentColor" stroke="none" cx="75" cy="50" r="7.5">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  )
}

export default LoaderIcon
