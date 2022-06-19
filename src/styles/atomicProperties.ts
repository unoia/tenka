// import { vars } from '../../themes/vars.css';
import { variables as vars } from "./variables";

// const sizes = {
//   full: '100%',
//   touchable: vars.touchableSize,
// };

export const alignItems = {
  ...vars["align-items"]
} as const

// export const display = {
//   ...vars.display
// } as const

// export const flexDirection = {
//   ...vars.direction
// } as const

// export const flexWrap = {
//   ...vars["flex-wrap"]
// } as const

// export const justifyContent = {
//   ...vars["justify-content"]
// } as const

// export const radius = {
//   ...vars.radius
// } as const

export const space = {
  ...vars.space,
} as const;

export const textSizes = {
  ...vars.size
} as const

// export const zIndex = {
//   ...vars["z-index"]
// } as const

// const boxShadow = {
//   ...vars.shadow,
//   borderBrandAccentLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.brandAccent}`,
//   borderBrandAccentLightLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.brandAccentLight}`,
//   borderCaution: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.caution}`,
//   borderCautionLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.cautionLight}`,
//   borderCritical: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.critical}`,
//   borderCriticalLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.critical}`,
//   borderCriticalLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.criticalLight}`,
//   borderCriticalLightLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.criticalLight}`,
//   borderField: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.field}`,
//   borderFormAccent: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.formAccent}`,
//   borderFormAccentLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.formAccent}`,
//   borderFormAccentLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.formAccentLight}`,
//   borderFormAccentLightLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.formAccentLight}`,
//   borderInfo: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.info}`,
//   borderInfoLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.infoLight}`,
//   borderNeutral: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutral}`,
//   borderNeutralLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.neutral}`,
//   borderNeutralInverted: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutralInverted}`,
//   borderNeutralInvertedLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.neutralInverted}`,
//   borderNeutralLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutralLight}`,
//   borderPositive: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.positive}`,
//   borderPositiveLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.positiveLight}`,
//   borderPromote: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.promote}`,
//   borderPromoteLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.promoteLight}`,
//   outlineFocus: `0 0 0 ${vars.focusRingSize} ${vars.borderColor.focus}`,
// };

// export type BoxShadow = keyof typeof boxShadow;

// export const pseudoProperties = {
//   transform: vars.transform,
// } as const;

// export type PseudoProperties = keyof typeof pseudoProperties;

export const unresponsiveProperties = {
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  userSelect: ['none'],
  outline: ['none'],
  opacity: [0],
  // zIndex: zIndex,
  cursor: ['default', 'pointer'],
  pointerEvents: ['none'],
  top: [0],
  bottom: [0],
  left: [0],
  right: [0],
  // height: sizes,
  // width: sizes,
  minWidth: {
    0: '0%',
  },
  // maxWidth: vars.contentWidth,
  // transition: vars.transition,
} as const;

export type UnresponsiveProperties = keyof typeof unresponsiveProperties;

export const colorProperties = {
  // background: vars.backgroundColor,
  // boxShadow,
} as const;

// export type Background = keyof typeof vars.backgroundColor;

export type ColorProperties = keyof typeof colorProperties;

export const responsiveProperties = {
  // display: display,
  position: ['relative', 'absolute', 'fixed'],
  // borderRadius: radius,
  paddingTop: space,
  paddingBottom: space,
  paddingRight: space,
  paddingLeft: space,
  marginTop: space,
  marginBottom: space,
  marginRight: space,
  marginLeft: space,
  // alignItems: alignItems,
  // justifyContent: justifyContent,
  // flexDirection: flexDirection,
  // flexWrap: flexWrap,
  flexShrink: [0],
  flexGrow: [0, 1],
  textAlign: ['left', 'center', 'right'],
} as const;

export type ResponsiveProperties = keyof typeof responsiveProperties;
