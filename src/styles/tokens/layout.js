import { gutter } from "./gutter"

const defaultWidth = "1280px"
const small = "1080px"
const xsmall = "720px"

export const width = {
  min: {
    1536: { value: "1536px" },
    1280: { value: defaultWidth },
    1080: { value: small },
    1024: { value: "1024px" },
    960: { value: "960px" },
    840: { value: "840px" },
    768: { value: "768px" },
    720: { value: xsmall },
    640: { value: "640px" },
    420: { value: "420px" },
    375: { value: "375px" },
  },
  max: {
    1536: { value: "1535px" },
    1280: { value: "1279px" },
    1080: { value: "1079px" },
    1024: { value: "1023px" },
    960: { value: "959px" },
    840: { value: "839px" },
    768: { value: "767px" },
    720: { value: "719px" },
    640: { value: "639px" },
    420: { value: "419px" },
    375: { value: "374px" },
  },
  default: { value: defaultWidth },
  small: { value: small },
  xsmall: { value: xsmall },
  limit: { value: `calc(${defaultWidth} + calc(${gutter.desktop} * 2))` },
}
