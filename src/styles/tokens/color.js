/*
  Colors tokens
*/

export const brand = {
  primary: {
    100: { value: "hsl(358, 100%, 68%)" }, // #ff5a60 // #FF385},
    200: { value: "hsl(358, 83%, 64%)" }, // #ef585},
    300: { value: "hsl(358, 75%, 58%)" }, // #E4444},
    10: { value: "hsla(358, 100%, 68%, 0.1)" },
    20: { value: "hsla(358, 100%, 68%, 0.2)" },
    30: { value: "hsla(358, 100%, 68%, 0.3)" },
    40: { value: "hsla(358, 100%, 68%, 0.4)" },
    50: { value: "hsla(358, 100%, 68%, 0.5)" },
    60: { value: "hsla(358, 100%, 68%, 0.6)" },
    70: { value: "hsla(358, 100%, 68%, 0.7)" },
    80: { value: "hsla(358, 100%, 68%, 0.8)" },
    90: { value: "hsla(358, 100%, 68%, 0.9)" },
  },
  secondary: {
    100: { value: "hsl(181, 100%, 27%)" }, // #008689
    200: { value: "hsl(186, 100%, 26%)" }, // #007986
    300: { value: "hsl(182, 100%, 22%)" }, // #006c6f
    10: { value: "hsla(181, 100%, 27%, 0.1)" },
    20: { value: "hsla(181, 100%, 27%, 0.2)" },
    30: { value: "hsla(181, 100%, 27%, 0.3)" },
    40: { value: "hsla(181, 100%, 27%, 0.4)" },
    50: { value: "hsla(181, 100%, 27%, 0.5)" },
    60: { value: "hsla(181, 100%, 27%, 0.6)" },
    70: { value: "hsla(181, 100%, 27%, 0.7)" },
    80: { value: "hsla(181, 100%, 27%, 0.8)" },
    90: { value: "hsla(181, 100%, 27%, 0.9)" },
  },
  "secondary-alt": {
    300: { value: "#005965" },
    200: { value: "#006C70" },
    100: { value: "#00797e" },
    90: { value: "#008489" },
    80: { value: "hsl(182, 100%, 36%)" },
    70: { value: "hsl(182, 58%, 52%)" },
    60: { value: "hsl(182, 57%, 60%)" },
    50: { value: "hsl(182, 54%, 66%)" },
    40: { value: "hsl(182, 49%, 72%)" },
    30: { value: "hsl(182, 35%, 78%)" },
    20: { value: "hsl(181, 40%, 79%)" },
    10: { value: "hsl(181, 45%, 80%)" },
    "05": { value: "hsl(181, 46%, 82%)" },
  },
  maroon: {
    10: { value: "hsl(335, 70%, 38%)" }, // #a41d55
    100: { value: "hsl(343, 70%, 46%)" }, // #C72352
    200: { value: "hsl(335, 70%, 38%)" }, // #a41d55
    300: { value: "hsl(337, 71%, 32%)" }, // #8c1845
  },
}

export const accent = {
  scarlet: { value: "#ff1623" },
  peach: { value: "#f7e0d0" },
  navy: { value: "#0f083c" },
  yellow: { value: "#ffdc4a" },
  rose: { value: "#ffa78f" },
  pink: { value: "#ff9e9f" },
  sky: { value: "#b3d9da" },
}

export const dark = {
  100: { value: "rgba(0, 0, 0, 1)" },
  90: { value: "rgba(0, 0, 0, 0.94)" },
  80: { value: "rgba(0, 0, 0, 0.84)" },
  70: { value: "rgba(0, 0, 0, 0.72)" },
  60: { value: "rgba(0, 0, 0, 0.54)" },
  50: { value: "rgba(0, 0, 0, 0.44)" },
  40: { value: "rgba(0, 0, 0, 0.2)" },
  30: { value: "rgba(0, 0, 0, 0.12)" },
  20: { value: "rgba(0, 0, 0, 0.08)" },
  10: { value: "rgba(0, 0, 0, 0.04)" },
}
export const darkHex = {
  100: { value: "#000000" }, // Heading
  90: { value: "#000100" }, // Heading
  80: { value: "#272727" }, // Heading and Body text in text-heavy page such as blog post
  70: { value: "#484848" }, // Body text
  60: { value: "#767676" }, // Caption and subtitle
  50: { value: "#8f8f8f" },
  40: { value: "#cccccc" },
  30: { value: "#e0e0e0" },
  20: { value: "#ebebeb" },
  10: { value: "#f5f5f5" },
}

export const light = {
  100: { value: "rgba(255, 255, 255, 1)" },
  90: { value: "rgba(255, 255, 255, 0.84)" },
  80: { value: "rgba(255, 255, 255, 0.71)" },
  70: { value: "rgba(255, 255, 255, 0.54)" },
  60: { value: "rgba(255, 255, 255, 0.4)" },
  50: { value: "rgba(255, 255, 255, 0.2)" },
  40: { value: "rgba(255, 255, 255, 0.16)" },
  30: { value: "rgba(255, 255, 255, 0.1)" },
  20: { value: "rgba(255, 255, 255, 0.06)" },
  10: { value: "rgba(255, 255, 255, 0.02)" },
}
export const lightHex = {
  100: { value: "#ffffff" },
  90: { value: "#dcdcdc" },
  80: { value: "#c0c0c0" },
  70: { value: "#9c9c9c" },
}

export const tone = {
  critical: {
    10: { value: "rgba(255, 93, 61, 0.11)" },
    100: { value: "#ff603f" },
    200: { value: "#e42700" },
    300: { value: "#940d00" },
  },
  warning: {
    10: { value: "hsl(40, 100%, 91%)" }, // #ffefcf
    100: { value: "hsl(42, 100%, 50%)" }, // #ffb200
    200: { value: "hsl(40, 100%, 48%)" }, // #f5a300
    300: { value: "hsl(32, 100%, 32%)" }, // #A35700
  },
  positive: {
    100: { value: "#57d9a3" },
    200: { value: "#00875a" },
    300: { value: "#006644" },
  },
}

export const bg = {
  primary: { value: "#ffffff" },
  gray: { value: "#f0f0f0" },
  rose: {
    100: { value: "#fce7dd" },
    200: { value: "#e3cdd1" },
    300: { value: "#d8bac0" },
  },
  scarlet: {
    100: { value: "#ffeaee" },
    200: { value: "#ffc4cf" },
    300: { value: "#ffa2b3" },
  },
  sage: {
    100: { value: "#e8f3ec" },
    200: { value: "#cad8b4" },
    300: { value: "#b7ca9a" },
  },
  sea: {
    100: { value: "#d7efee" },
    200: { value: "#a9dcd7" },
    300: { value: "#92d3cc" },
  },
  plum: {
    100: { value: "#dfd8e3" },
    200: { value: "#d4d0e3" },
    300: { value: "#beb8d5" },
  },
  sky: {
    100: { value: "#e2eff9" },
    200: { value: "#b7d7f0" },
    300: { value: "#91c2e8" },
  },
  sand: {
    100: { value: "#f6f1e4" },
    200: { value: "#e0d0b7" },
    300: { value: "#d8c4a5" },
  },
  dust: {
    100: { value: "#f7f7f5" },
    200: { value: "#f0f0ee" },
    300: { value: "#b7b7ad" },
  },
  verdant: {
    100: { value: "#e4fdeb" },
    200: { value: "#d9fce3" },
    300: { value: "#a9eebc" },
  },
  banana: {
    100: { value: "#fffddd" },
    200: { value: "#fffbbb" },
    300: { value: "#fffe95" },
  },
}
