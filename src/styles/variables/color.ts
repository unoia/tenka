/*
  Colors tokens
*/

const brandPrimary = {
  100: 'hsl(358, 100%, 68%)', // #ff5a60 // #FF385C
  200: 'hsl(358, 83%, 64%)', // #ef585d
  300: 'hsl(358, 75%, 58%)', // #E44449
  10: 'hsla(358, 100%, 68%, 0.1)',
  20: 'hsla(358, 100%, 68%, 0.2)',
  30: 'hsla(358, 100%, 68%, 0.3)',
  40: 'hsla(358, 100%, 68%, 0.4)',
  50: 'hsla(358, 100%, 68%, 0.5)',
  60: 'hsla(358, 100%, 68%, 0.6)',
  70: 'hsla(358, 100%, 68%, 0.7)',
  80: 'hsla(358, 100%, 68%, 0.8)',
  90: 'hsla(358, 100%, 68%, 0.9)',
} as const

const brandSecondary = {
  "100": 'hsl(181, 100%, 27%)', // #008689
  "200": 'hsl(186, 100%, 26%)', // #007986
  "300": 'hsl(182, 100%, 22%)', // #006c6f
  "10": 'hsla(181, 100%, 27%, 0.1)',
  "20": 'hsla(181, 100%, 27%, 0.2)',
  "30": 'hsla(181, 100%, 27%, 0.3)',
  "40": 'hsla(181, 100%, 27%, 0.4)',
  "50": 'hsla(181, 100%, 27%, 0.5)',
  "60": 'hsla(181, 100%, 27%, 0.6)',
  "70": 'hsla(181, 100%, 27%, 0.7)',
  "80": 'hsla(181, 100%, 27%, 0.8)',
  "90": 'hsla(181, 100%, 27%, 0.9)',
} as const

const brandSecondaryAlt = {
  "300": '#005965',
  "200": '#006C70',
  "100": '#00797e',
  "90": '#008489',
  "80": 'hsl(182, 100%, 36%)',
  "70": 'hsl(182, 58%, 52%)',
  "60": 'hsl(182, 57%, 60%)',
  "50": 'hsl(182, 54%, 66%)',
  "40": 'hsl(182, 49%, 72%)',
  "30": 'hsl(182, 35%, 78%)',
  "20": 'hsl(181, 40%, 79%)',
  "10": 'hsl(181, 45%, 80%)',
  "05": 'hsl(181, 46%, 82%)',
} as const

const brandMaroon = {
  "10": 'hsl(335, 70%, 38%)', // #a41d55
  "100": 'hsl(343, 70%, 46%)', // #C72352
  "200": 'hsl(335, 70%, 38%)', // #a41d55
  "300": 'hsl(337, 71%, 32%)', // #8c1845} as const
}

export const brand = {
  "primary": brandPrimary,
  "secondary": brandSecondary,
  "secondary-alt": brandSecondaryAlt,
  "maroon": brandMaroon,
} as const

export const accent = {
  "scarlet": '#ff1623',
  "peach": '#f7e0d0',
  "navy": '#0f083c',
  "yellow": '#ffdc4a',
  "rose": '#ffa78f',
  "pink": '#ff9e9f',
  "sky": '#b3d9da',
} as const

export const dark = {
  "100": 'rgba(0, 0, 0, 1)',
  "90": 'rgba(0, 0, 0, 0.94)',
  "80": 'rgba(0, 0, 0, 0.84)',
  "70": 'rgba(0, 0, 0, 0.72)',
  "60": 'rgba(0, 0, 0, 0.54)',
  "50": 'rgba(0, 0, 0, 0.44)',
  "40": 'rgba(0, 0, 0, 0.2)',
  "30": 'rgba(0, 0, 0, 0.12)',
  "20": 'rgba(0, 0, 0, 0.08)',
  "10": 'rgba(0, 0, 0, 0.04)',
} as const

export const darkHex = {
  "100": '#000000', // Heading
  "90": '#000100', // Heading
  "80": '#272727', // Heading and Body text in text-heavy page such as blog post
  "70": '#484848', // Body text
  "60": '#767676', // Caption and subtitle
  "50": '#8f8f8f',
  "40": '#cccccc',
  "30": '#e0e0e0',
  "20": '#ebebeb',
  "10": '#f5f5f5',
} as const

export const light = {
  "100": 'rgba(255, 255, 255, 1)',
  "90": 'rgba(255, 255, 255, 0.84)',
  "80": 'rgba(255, 255, 255, 0.71)',
  "70": 'rgba(255, 255, 255, 0.54)',
  "60": 'rgba(255, 255, 255, 0.4)',
  "50": 'rgba(255, 255, 255, 0.2)',
  "40": 'rgba(255, 255, 255, 0.16)',
  "30": 'rgba(255, 255, 255, 0.1)',
  "20": 'rgba(255, 255, 255, 0.06)',
  "10": 'rgba(255, 255, 255, 0.02)',
} as const

export const lightHex = {
  "100": '#ffffff',
  "90": '#dcdcdc',
  "80": '#c0c0c0',
  "70": '#9c9c9c',
} as const

export const tone = {
  "critical-10": 'rgba(255, 93, 61, 0.11)',
  "critical-100": '#ff603f',
  "critical-200": '#e42700',
  "critical-300": '#940d00',
  "warning-10": 'hsl(40, 100%, 91%)', // #ffefcf,
  "warning-100": 'hsl(42, 100%, 50%)', // #ffb200,
  "warning-200": 'hsl(40, 100%, 48%)', // #f5a300,
  "warning-300": 'hsl(32, 100%, 32%)', // #A35700,
  "positive-10": 'hsl(155, 63%, 60%, 0.08)',
  "positive-100": '#57d9a3',
  "positive-200": '#00875a',
  "positive-300": '#006644',
} as const

export const bg = {
  "body": '#ffffff',
  "primary": '#ffffff',
  "gray": '#f0f0f0',
  "rose-100": '#fce7dd',
  "rose-200": '#e3cdd1',
  "rose-300": '#d8bac0',
  "scarlet-100": '#ffeaee',
  "scarlet-200": '#ffc4cf',
  "scarlet-300": '#ffa2b3',
  "sage-100": '#e8f3ec',
  "sage-200": '#cad8b4',
  "sage-300": '#b7ca9a',
  "sea-100": '#d7efee',
  "sea-200": '#a9dcd7',
  "sea-300": '#92d3cc',
  "plum-100": '#dfd8e3',
  "plum-200": '#d4d0e3',
  "plum-300": '#beb8d5',
  "sky-100": '#e2eff9',
  "sky-200": '#b7d7f0',
  "sky-300": '#91c2e8',
  "sand-100": '#f6f1e4',
  "sand-200": '#e0d0b7',
  "sand-300": '#d8c4a5',
  "dust-100": '#f7f7f5',
  "dust-200": '#f0f0ee',
  "dust-300": '#b7b7ad',
  "verdant-100": '#e4fdeb',
  "verdant-200": '#d9fce3',
  "verdant-300": '#a9eebc',
  "banana-100": '#fffddd',
  "banana-200": '#fffbbb',
  "banana-300": '#fffe95',
  // brand: palette.grey['900'],
  // brandAccent,
  // brandAccentActive: brandAccent,
  // brandAccentHover: palette.grey['700'],
  // brandAccentSoft: palette.grey['200'],
  // brandAccentSoftActive: darken(0.025, palette.grey['200']),
  // brandAccentSoftHover: darken(0.05, palette.grey['200']),
  // card: '#ffffff',
  // caution: palette.yellow['500'],
  // cautionLight: palette.yellow['100'],
  // critical: palette.red['600'],
  // criticalActive: darken(0.075, palette.red['600']),
  // criticalHover: darken(0.05, palette.red['600']),
  // criticalLight: palette.red['100'],
  // criticalSoft: palette.red['100'],
  // criticalSoftActive: darken(0.05, palette.red['100']),
  // criticalSoftHover: darken(0.025, palette.red['100']),
  // formAccent,
  // formAccentActive: palette.indigo['700'],
  // formAccentDisabled: palette.grey['200'],
  // formAccentHover: darken(0.05, palette.indigo['600']),
  // formAccentSoft: palette.indigo['100'],
  // formAccentSoftActive: darken(0.05, palette.indigo['100']),
  // formAccentSoftHover: darken(0.025, palette.indigo['100']),
  // info: palette.blue['600'],
  // infoLight: palette.blue['100'],
  // input: '#ffffff',
  // inputDisabled: palette.grey['200'],
  // neutral: palette.grey['200'],
  // neutralLight: palette.grey['100'],
  // positive: palette.mint['600'],
  // positiveLight: palette.mint['100'],
  // promote: palette.purple['600'],
  // promoteLight: palette.purple['100'],
  // selection: palette.grey['100'],
} as const
