import { gutter } from './gutter'

const defaultWidth = '1280px'
const small = '1080px'
const xsmall = '720px'

export const width = {
  min: {
    1536: '1536px',
    1280: defaultWidth,
    1080: small,
    1024: '1024px',
    960: '960px',
    840: '840px',
    768: '768px',
    720: xsmall,
    640: '640px',
    420: '420px',
    375: '375px',
  },
  max: {
    1536: '1535px',
    1280: '1279px',
    1080: '1079px',
    1024: '1023px',
    960: '959px',
    840: '839px',
    768: '767px',
    720: '719px',
    640: '639px',
    420: '419px',
    375: '374px',
  },
  default: defaultWidth,
  small,
  xsmall,
  limit: `calc(${defaultWidth} + calc(${gutter.desktop} * 2))`,
}
