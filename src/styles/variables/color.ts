/*
  Colors tokens
*/

export const accent = {
  "maroon": '#C72352',
  "scarlet": "#c72905",
  "ember": '#ff1623',
  "violet": "#460479",
  "peach": '#f7e0d0',
  "navy": '#0f083c',
  "yellow": '#ffdc4a',
  "rose": '#ffa78f',
  "pink": '#ff9e9f',
  "sky": '#b3d9da',
  "sea": '#008489',
  "cherry-100": "#e61e4d",
  "cherry-200": "#e31c5f",
  "cherry-300": "#d70466",
  "luxe-100": "#59086e",
  "luxe-200": "#460479",
  "luxe-300": "#440589",
  "ruby-100": "#bd1e59",
  "ruby-200": "#92174d",
  "ruby-300": "#861453",
} as const

export const palette = {
  "crimson-10": "#FFF8F6",
  "crimson-50": "#FFDFD9",
  "crimson-100": "#D40029",
  "crimson-200": "#B80024",
  "crimson-300": "#94001D",
  "tangerine-10": "#FFFBF6",
  "tangerine-50": "#FFEDD9",
  "tangerine-100": "#E07912",
  "tangerine-200": "#B86200",
  "tangerine-300": "#944F00",
  "teal-10": "#F5FFFF",
  "teal-50": "#DBFEFF",
  "teal-100": "#60B6B5",
  "teal-200": "#008384",
  "teal-300": "#006266",
  "indigo-10": "#FBF5FF",
  "indigo-50": "#EFDCFE",
  "indigo-100": "#5E05A3",
  "indigo-200": "#460479",
  "indigo-300": "#390363",
  "dark-100": "#000000",
  "dark-90": "#000100",
  "dark-80": "#222222",
  "dark-70": "#484848",
  "dark-60": "#767676",
  "dark-50": "#8f8f8f",
  "dark-40": "#cccccc",
  "dark-30": "#e0e0e0",
  "dark-20": "#ebebeb",
  "dark-10": "#f5f5f5",
  "dark-05": "#f8f8f8",
} as const

export const bgPrimary = {
  // "primary-hover": "#f7f7f7",
  // "primary-disabled": "#f7f7f7",
  // "primary-selected": "#f7f7f7",
  // "primary-error": "#fff8f6",
  // "primary-inverse": "#222222",
  // "primary-inverse-hover": "#000000",
  // "primary-inverse-disabled": "#dddddd",
  // "primary-inverse-error": "#c13515",
  // "primary-inverse-error-hover": "#b32505",
  "primary-brand": "#ff385c",
  "primary": "#ffffff",
  "primary-hover": "#f3f3f3",
  "primary-disabled": "#f3f3f3",
  "primary-inverse": "#000000",
  "primary-inverse-hover": "#222222",
  "primary-inverse-pressed": "#4b4b4b",
  "primary-inverse-disabled": "#f3f3f3",
} as const

export const bgSecondary = {
  // "secondary": "#f7f7f7",
  "secondary-brand": "#E61E4D",
  "secondary": "#f3f3f3",
  "secondary-hover": "#dddddd",
  "secondary-pressed": "#c6c6c6",
  "secondary-disabled": "#f3f3f3",
  "secondary-inverse": "#000000",
  "secondary-inverse-hover": "#222222",
  "secondary-inverse-pressed": "#4b4b4b",
  "secondary-inverse-disabled": "#f7f7f7",
  // "secondary-brand": `linear-gradient(to right,#e61e4d 0%,#e31c5f 50%,#d70466 100%)`,
  // "secondary-brand-rtl": `linear-gradient(to left,#e61e4d 0%,#e31c5f 50%,#d70466 100%)`,
  // "secondary-brand-hover": `radial-gradient(circle at center,#ff385c 0%,#e61e4d 27.5%,#e31c5f 40%,#d70466 57.5%,#bd1e59 75%,#bd1e59 100%)`,
  // "secondary-plus": `linear-gradient(to right,#bd1e59 0%,#92174d 50%,#861453 100%)`,
  // "secondary-plus-rtl": `linear-gradient(to left,#bd1e59 0%,#92174d 50%,#861453 100%)`,
  // "secondary-plus-hover": `radial-gradient(circle at center,#d70466 0%,#bd1e59 30%,#92174d 55%,#861453 72.5%,#6c0d63 90%,#6c0d63 100%)`,
  // "secondary-luxe": `linear-gradient(to right,#59086e 0%,#460479 50%,#440589 100%)`,
  // "secondary-luxe-rtl": `linear-gradient(to left,#59086e 0%,#460479 50%,#440589 100%)`,
  // "secondary-luxe-hover": `radial-gradient(circle at center,#6c0d63 0%,#59086e 30%,#460479 55%,#440589 72.5%,#3b07bb 90%,#3b07bb 100%)`,
} as const

export const bgSuccess = {
  "success": "#f5ffff",
  "success-inverse": "#008384",
  "success-inverse-hover": "#008384",
  "success-inverse-pressed": "#008384",
  "success-secondary": "#dbfeff",
} as const

export const bgWarning = {
  "warning": "#fffbf6",
  "warning-inverse": "#e07912",
  "warning-inverse-hover": "#e07912",
  "warning-inverse-pressed": "#e07912",
  "warning-secondary": "#ffedd9",
} as const

export const bgError = {
  "error": "#fff8f6",
  "error-inverse": "#d40029",
  "error-inverse-hover": "#b80024",
  "error-inverse-pressed": "#94001d",
  "error-secondary": "#ffdfd9",
} as const

export const bgInfo = {
  "info": "#fbf5ff",
  "info-inverse": "#460479",
  "info-inverse-hover": "#460479",
  "info-inverse-pressed": "#460479",
  "info-secondary": "#efdcfe",
} as const

export const bgTertiary = {
  "tertiary": "#b0b0b0",
  "tertiary-hover": "#6a6a6a",
  "tertiary-disabled": "#ebebeb",
  "tertiary-brand": "#e00b41",
} as const

export const bgQuartenary = {
  "quaternary": "#f2f2f2",
  "quaternary-hover": "#ebebeb",
} as const

export const borderColor = {
  "primary-field": "#e0e0e0",
  "active": "#272727",
  "success": "#008384",
  "warning": "#b86200",
  "error": "#d40029",
  "info": "#460479",
  "primary": "#222222",
  "primary-hover": "#000000",
  "primary-disabled": "#DDDDDD",
  "primary-inverse": "#FFFFFF",
  "secondary": "#B0B0B0",
  "secondary-hover": "#222222",
  "secondary-selected": "#222222",
  "secondary-disabled": "#EBEBEB",
  "secondary-error": "#C13515",
  "tertiary": "#DDDDDD",
  "tertiary-hover": "#000000",
  "tertiary-selected": "#222222",
  "tertiary-error": "#C13515",
  "tertiary-error-hover": "#B32505",
  "quarternary": "#8C8C8C",
} as const

export const iconColors = {
  "success": "#60b6b5",
  "success-hover": "#008384",
  "warning": "#e07912",
  "warning-hover": "#b86200",
  "error": "#d40029",
  "error-hover": "#b80024",
  "info": "#5e05a3",
  "info-hover": "#460479",
}

export const textColors = {
  // "primary-disabled": "#dddddd",
  // "primary-hover": "#000000",
  // "primary-error": "#c13515",
  // "primary-error-hover": "#b32505",
  // "primary-inverse": "#ffffff",
  "primary-brand": "linear-gradient(to right, #e61e4d 0 %, #e31c5f 50 %, #d70466 100,)",
  // "secondary": "#6a6a6a",
  // "secondary-disabled": "#dddddd",
  // "secondary-error": "#c13515",
  // "secondary-error-hover": "#b32505",
  // "legal": "#428bff",
  "focused": "#3f3f3f",
  "link-disabled": "#929292",
  "primary": "#222222",
  "primary-inverse": "#ffffff",
  "primary-hover": "#000000",
  "primary-disabled": "#a6a6a6",
  "secondary": "#6a6a6a",
  "secondary-disabled": "#dddddd",
  /**
   * Success
   */
  "success": "#008384",
  "success-hover": "#006266",
  "success-inverse": "#f5ffff",
  "success-inverse-hover": "#ffffff",
  "success-secondary": "#006266",
  /**
   * Warning
   */
  "warning": "#b86200",
  "warning-hover": "#944f00",
  "warning-inverse": "#fffbf6",
  "warning-inverse-hover": "#ffffff",
  "warning-secondary": "#944f00",
  /**
   * Error
   */
  "error": "#d40029",
  "error-hover": "#b80024",
  "error-inverse": "#fff8f6",
  "error-inverse-hover": "#ffffff",
  "error-secondary": "#b80024",
  /**
   * Info
   */
  "info": "#460479",
  "info-hover": "#390363",
  "info-inverse": "#fbf5ff",
  "info-inverse-hover": "#ffffff",
  "info-secondary": "#390363",
} as const

// export const iconColors = {
//   "primary": "#222222",
//   "primary-disabled": "#dddddd",
//   "primary-hover": "#000000",
//   "primary-error": "#c13515",
//   "primary-error-hover": "#b32505",
//   "primary-inverse": "#ffffff",
//   "secondary": "#6a6a6a",
//   "secondary-hover": "#222222",
//   "secondary-selected": "#222222",
//   "secondary-disabled": "#f7f7f7",
//   "tertiary": "#8c8c8c",
//   "error": "#c13515",
//   "warning": "#e07912",
//   "info": "#428bff",
//   "success": "#008a05",
// } as const

export const borderColors = {
  "primary": "#222222",
  "primary-hover": "#000000",
  "primary-disabled": "#dddddd",
  "primary-inverse": "#ffffff",
  "secondary": "#b0b0b0",
  "secondary-hover": "#222222",
  "secondary-selected": "#222222",
  "secondary-disabled": "#ebebeb",
  "secondary-error": "#c13515",
  "tertiary": "#dddddd",
  "tertiary-hover": "#000000",
  "tertiary-selected": "#222222",
  "tertiary-error": "#c13515",
  "tertiary-error-hover": "#b32505",
  "quarternary": "#8c8c8c",
} as const

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

// export const tone = {
//   "critical-10": 'rgba(255, 93, 61, 0.11)',
//   "critical-100": '#ff603f',
//   "critical-200": '#e42700',
//   "critical-300": '#940d00',
//   "warning-10": 'hsl(40, 100%, 91%)', // #ffefcf,
//   "warning-100": 'hsl(42, 100%, 50%)', // #ffb200,
//   "warning-200": 'hsl(40, 100%, 48%)', // #f5a300,
//   "warning-300": 'hsl(32, 100%, 32%)', // #A35700,
//   "positive-10": 'hsl(155, 63%, 60%, 0.08)',
//   "positive-100": '#57d9a3',
//   "positive-200": '#00875a',
//   "positive-300": '#006644',
// } as const
//

// export const tone = {
//   "crimson-10": "#FFF8F6",
//   "crimson-50": "#FFDFD9",
//   "crimson-100": "#D40029",
//   "crimson-200": "#B80024",
//   "crimson-300": "#94001D",
//   "tangerine-10": "#FFFBF6",
//   "tangerine-50": "#FFEDD9",
//   "tangerine-100": "#E07912",
//   "tangerine-200": "#B86200",
//   "tangerine-300": "#944F00",
//   "teal-10": "#F5FFFF",
//   "teal-50": "#DBFEFF",
//   "teal-100": "#60B6B5",
//   "teal-200": "#008384",
//   "teal-300": "#006266",
// } as const

// export const bg = {
// "body": '#ffffff',
// "primary": '#ffffff',
// "gray": '#f0f0f0',
// "rose-100": '#fce7dd',
// "rose-200": '#e3cdd1',
// "rose-300": '#d8bac0',
// "scarlet-100": '#ffeaee',
// "scarlet-200": '#ffc4cf',
// "scarlet-300": '#ffa2b3',
// "sage-100": '#e8f3ec',
// "sage-200": '#cad8b4',
// "sage-300": '#b7ca9a',
// "sea-100": '#d7efee',
// "sea-200": '#a9dcd7',
// "sea-300": '#92d3cc',
// "plum-100": '#dfd8e3',
// "plum-200": '#d4d0e3',
// "plum-300": '#beb8d5',
// "sky-100": '#e2eff9',
// "sky-200": '#b7d7f0',
// "sky-300": '#91c2e8',
// "sand-100": '#f6f1e4',
// "sand-200": '#e0d0b7',
// "sand-300": '#d8c4a5',
// "dust-100": '#f7f7f5',
// "dust-200": '#f0f0ee',
// "dust-300": '#b7b7ad',
// "verdant-100": '#e4fdeb',
// "verdant-200": '#d9fce3',
// "verdant-300": '#a9eebc',
// "banana-100": '#fffddd',
// "banana-200": '#fffbbb',
// "banana-300": '#fffe95',
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
// } as const

// export const foreground = {
// brandAccent,
// caution: palette.yellow['900'],
// critical: palette.red['700'],
// formAccent,
// info: palette.blue['700'],
// link,
// linkHover: link,
// linkVisited,
// neutral: black,
// neutralInverted: white,
// positive: palette.mint['700'],
// promote: palette.purple['700'],
// rating: black,
// secondary,
// secondaryInverted: rgba('#fff', 0.65),
// } as const