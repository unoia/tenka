
/**
 * DISPLAY
 * The largest text on the screen is reserved for short, important text or numerals.
 */
export const displays = {
  "xs": '2.25rem',
  "s": '2.75rem',
  "m": '3.25rem',
  "l": '6rem',
}
export const lineDisplays = {
  "xs": '2.75rem',
  "s": '3.25rem',
  "m": '4rem',
  "l": '7rem',
}
export type TextDisplay = keyof typeof displays
export type LineDisplay = keyof typeof lineDisplays

/**
 * HEADING
 * Used to break up content into sections and provide a clear hierarchy of information.
 */
export const headings = {
  "xs": '1.25rem',
  "s": '1.5rem',
  "m": '1.75rem',
  "l": '2rem',
  "xl": '2.25rem',
  "xxl": '2.5rem',
} as const
export const lineHeadings = {
  "xs": '1.75rem',
  "s": '2rem',
  "m": '2.25rem',
  "l": '2.5rem',
  "xl": '2.75rem',
  "xxl": '3.25rem',
} as const
export type TextHeading = keyof typeof headings
export type LineHeading = keyof typeof lineHeadings

/**
 * LABEL
 *  A short phrase or sentence that provides context or information about a specific block of text.
 */
export const labels = {
  "xs": '0.75rem',
  "s": '0.875rem',
  "m": '1rem',
  "l": '1.125rem',
  "xl": '1.25rem',
  "xxl": '1.5rem',
} as const
export const lineLabels = {
  "xs": '1rem',
  "s": '1rem',
  "m": '1.25rem',
  "l": '1.5rem',
  "xl": '1.75rem',
  "xxl": '2.25rem',
} as const
export type TextLabel = keyof typeof labels
export type LineLabel = keyof typeof lineLabels

/**
 * PARAGRAPH
 * Longer blocks of text, used for mostly text-based content.
 */
export const paragraphs = {
  "xs": '0.75rem',
  "s": '0.875rem',
  "m": '1rem',
  "l": '1.125rem',
  "xl": '1.25rem',
} as const
export const lineParagraphs = {
  "xs": '1.25rem',
  "s": '1.25rem',
  "m": '1.5rem',
  "l": '1.75rem',
  "xl": '2.25rem',
} as const
export type TextParagraph = keyof typeof paragraphs
export type LineParagraph = keyof typeof lineParagraphs

export const fontWeight = {
  "thin": "100",
  "light": "200",
  "book": "300",
  "regular": "400",
  "medium": "500",
  "semibold": "600",
  "bold": "700",
  "xbold": "800",
  "xxbold": "900",
} as const

export type FontWeight = keyof typeof fontWeight

// export const fontSize = {
//   "heading-1": '3rem',
//   "heading-2": '2rem',
//   "heading-3": '1.5rem', // 24px
//   "heading-4": '1.1875rem', // 19px
//   "heading-5": '1.0625rem', // 17px
//   "heading-6": '0.9375rem', // 15px
//   "xlarge": '1.375rem', // 22px
//   "large": '1.1875rem', //  19px
//   "medium": '1.0625rem', // 17px
//   "small": '0.9375rem', // 15px
//   "body-1": '1.375rem',  // 22px
//   "body-2": '1.1875rem', //  19px
//   "body-3": '1.0625rem', // 17px
//   "body-4": '0.9375rem', // 15px
//   "caption-1": '0.875rem', //14px
//   "caption-2": '0.75rem', //12px
// } as const

// export type FontSize = keyof typeof fontSize

// export const lineHeight = {
//   "display-1": '1.125',
//   "display-2": '1.125',
//   "display-3": '1.125',
//   "heading-1": '3.5rem',
//   "heading-2": '2.5rem',
//   "heading-3": '2rem',
//   "heading-4": '1.625rem', // 26px
//   "heading-5": '1.375rem', // 22px
//   "heading-6": '1.25rem', // 20px
//   "xlarge": '2rem', // 22/32
//   "large": '1.75rem', // 19/28
//   "medium": '1.625rem', // 17/26
//   "small": '1.375rem', // 15/22
//   "body-1": '2rem',
//   "body-2": '1.75rem',
//   "body-3": '1.625rem',
//   "body-4": '1.375rem',
//   "caption-1": '1rem', // 14/16
//   "caption-2": '0.75rem', // 12/12
// } as const

// export type LineHeight = keyof typeof lineHeight

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