// This code taken and modified from SEEK OSS Styleguide
// source: https://github.com/seek-oss/seek-style-guide

import React from 'react'
import PropTypes from 'prop-types'

import omit from 'lodash.omit'
import has from 'lodash.has'
import some from 'lodash.some'
import includes from 'lodash.includes'

export const sizes = ['xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl']

const getBooleanSizePropTypes = () => {
  const booleanProps = {}

  sizes?.forEach((size) => {
    booleanProps[size] = PropTypes.bool
  })

  return booleanProps
}

export const SizePropTypes = {
  padding: (props, propName, componentName) => {
    // eslint-disable-line consistent-return
    if (props.size && !includes(sizes, props.size)) {
      return new Error(
        `Invalid prop padding='${props.size}' supplied to ${componentName}`
      )
    }

    if (props.size && some(sizes, (size) => has(props, size))) {
      return new Error(
        `Seems that you've accidentially supplied boolean size along with padding='${props.size}' to ${componentName}, please remove one of them. Otherwise boolean prop will overwrite the 'size' prop.`
      )
    }
  },
  ...getBooleanSizePropTypes(),
}

const parseBooleanSize = (props) => {
  const sizeProps = {}

  sizes?.forEach((size) => {
    if (props[size]) {
      sizeProps.padding = size
    }
  })

  return sizeProps
}

export const withBoxPaddingProps = (OriginalComponent) => {
  const DecoratedComponent = React.forwardRef((props, forwardedRef) => {
    const sizeProp = parseBooleanSize(props)

    const newProps = {
      ...omit(props, sizes),
      ...sizeProp,
    }

    return <OriginalComponent ref={forwardedRef} {...newProps} />
  })

  DecoratedComponent.propTypes = SizePropTypes
  DecoratedComponent.displayName = OriginalComponent.displayName

  return DecoratedComponent
}

export default withBoxPaddingProps
