
export const timing = {
  100: '100ms',
  200: '200ms',
  300: '300ms',
  400: '400ms',
  500: '500ms',
  600: '600ms',
  700: '700ms',
  800: '800ms',
  900: '900ms',
  1000: '1000ms',
} as const

export const easing = {
  "ease-in": 'cubic-bezier(.8, .2, .6, 1)',
  "ease-out": 'cubic-bezier(.2, .8, .4, 1)',
  "ease-in-out": 'cubic-bezier(0.4, 0, 0.2, 1)',
  "ease-in-quintic": 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  "ease-out-quintic": 'cubic-bezier(0.23, 1, 0.32, 1)',
  "ease-in-out-quintic": 'cubic-bezier(0.86, 0, 0.07, 1)',
  "linear": 'cubic-bezier(0, 0, 1, 1)',
} as const