
export const fontSize = {
  "display-1": '8rem',
  "display-2": '6rem',
  "display-3": '4rem',
  "heading-1": '3rem',
  "heading-2": '2rem',
  "heading-3": '1.5rem', // 24px
  "heading-4": '1.1875rem', // 19px
  "heading-5": '1.0625rem', // 17px
  "heading-6": '0.9375rem', // 15px
  "xlarge": '1.375rem', // 22px
  "large": '1.1875rem', //  19px
  "medium": '1.0625rem', // 17px
  "small": '0.9375rem', // 15px
  "body-1": '1.375rem',  // 22px
  "body-2": '1.1875rem', //  19px
  "body-3": '1.0625rem', // 17px
  "body-4": '0.9375rem', // 15px
  "caption-1": '0.875rem', //14px
  "caption-2": '0.75rem', //12px
} as const

export type FontSize = keyof typeof fontSize

export const lineHeight = {
  "display-1": '1.125',
  "display-2": '1.125',
  "display-3": '1.125',
  "heading-1": '3.5rem',
  "heading-2": '2.5rem',
  "heading-3": '2rem',
  "heading-4": '1.625rem', // 26px
  "heading-5": '1.375rem', // 22px
  "heading-6": '1.25rem', // 20px
  "xlarge": '2rem', // 22/32
  "large": '1.75rem', // 19/28
  "medium": '1.625rem', // 17/26
  "small": '1.375rem', // 15/22
  "body-1": '2rem',
  "body-2": '1.75rem',
  "body-3": '1.625rem',
  "body-4": '1.375rem',
  "caption-1": '1rem', // 14/16
  "caption-2": '0.75rem', // 12/12
} as const

export type LineHeight = keyof typeof lineHeight

export const fontWeight = {
  "100": "100",
  "200": "200",
  "300": "300",
  "400": "400",
  "500": "500",
  "600": "600",
  "700": "700",
  "800": "800",
  "900": "900",
} as const

export type FontWeight = keyof typeof fontWeight


/*
  Klitrip
  desktop - mobile
  • h1: 24/auto - 24/auto
  • h2: 20/auto - 20/auto
  • h3: 16/auto - 16/auto
  • h4: 14/140% - 14/140%
  • h5: 11/140% - 11/140%
  • h6: 9/140% - 9/140%
  • body: 16/140% - 16/140%
*/

/*
  d1: 96/96,
  h1: 36/40,
  h2: 26/30,
  h2: 22/26,
  h3: 22/28, ??
  body-xlarge: 22/32,
  ?? body-heading: 18/24,
  h3: 16/20,
  subtitle:16/20,
  list: {
    title: 16/20
    description: 14/20
  },
  body1: 16/20 // short form of reading, max. 2 lines of text
  body2: 16/24 // long form of reading, min. 3 lines of text
  body2: 16/26 // ??
  caption1: 14/18,
  caption2: 12/16,
  badge: 12/16,
*/