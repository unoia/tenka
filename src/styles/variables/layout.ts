const defaultWidth = '1280px'
const small = '1080px'
const xsmall = '720px'

export const gutter = {
  phone: '24px',
  tablet: '32px',
  desktop: '64px',
} as const

export const width = {
  "min-1536": '1536px',
  "min-1440": '1440px',
  "min-1280": defaultWidth,
  "min-1128": '1128px',
  "min-1080": small,
  "min-1024": '1024px',
  "min-960": '960px',
  "min-950": '950px',
  "min-840": '840px',
  "min-768": '768px',
  "min-744": '744px',
  "min-720": xsmall,
  "min-640": '640px',
  "min-420": '420px',
  "min-375": '375px',
  "max-1536": '1535px',
  "max-1440": '1439px',
  "max-1280": '1279px',
  "max-1128": '1127px',
  "max-1080": '1079px',
  "max-1024": '1023px',
  "max-960": '959px',
  "max-950": '949px',
  "max-840": '839px',
  "max-768": '767px',
  "max-744": '743px',
  "max-720": '719px',
  "max-640": '639px',
  "max-420": '419px',
  "max-375": '374px',
  default: defaultWidth,
  small,
  xsmall,
  limit: `calc(${defaultWidth} + calc(${gutter.desktop} * 2))`,
} as const
