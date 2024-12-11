/*
  Fontstack
*/

export const fontFamily = {
  primary: `"IBM Plex Sans", "SF Pro Display", -apple-system,
  BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
  "Helvetica Neue", sans-serif`,
  secondary: `"IBM Plex Sans", "IBM Plex Serif", "SF Pro Display", -apple-system,
  BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
  "Helvetica Neue", sans-serif`,
  monospace: `"Roboto Mono", "Operator Mono", monospace`,
  display: `"IBM Plex Sans"`,
} as const

export type FontFamily = keyof typeof fontFamily
