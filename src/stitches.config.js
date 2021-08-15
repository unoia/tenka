import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    prefix: "tenka",
    theme: {
      dark: {
        100: "rgba(0, 0, 0, 1)",
        90: "rgba(0, 0, 0, 0.94)",
        80: "rgba(0, 0, 0, 0.84)",
        70: "rgba(0, 0, 0, 0.72)",
        60: "rgba(0, 0, 0, 0.54)",
        50: "rgba(0, 0, 0, 0.44)",
        40: "rgba(0, 0, 0, 0.2)",
        30: "rgba(0, 0, 0, 0.12)",
        20: "rgba(0, 0, 0, 0.08)",
        10: "rgba(0, 0, 0, 0.04)",
      },
      colors: {
        "display-1": "128px",
        "display-2": "96px",
        "display-3": "64px",
        "heading-1": "48px",
        "heading-2": "32px",
        "heading-3": "24px",
        "heading-4": "19px",
        "heading-5": "17px",
        "heading-6": "15px",
        xlarge: "22px",
        large: "19px",
        medium: "17px",
        small: "15px",
        "caption-1": "14px",
        "caption-2": "12px",
      },
    },
    media: {
      "max-sphone": "(max-width: 419px)",
      sphone: "(min-width: 320px)",
      "max-phone": "(max-width: 419px)",
      "only-phone": "(min-width: 420px) and (max-width: 719px)",
      phone: "(min-width: 420px)",
      "max-tablet": "(max-width: 719px)",
      "only-tablet": "(min-width: 720px) and (max-width: 839px)",
      tablet: "(min-width: 720px)",
      "max-ltablet": "(max-width: 839px)",
      "only-ltablet": "(min-width: 840px) and (max-width: 1023px)",
      ltablet: "(min-width: 840px)",
      "max-desktop": "(max-width: 1023px)",
      "only-desktop": "(min-width: 1024px) and (max-width: 1535px)",
      desktop: "(min-width: 1024px)",
      "max-wide": "(max-width: 1535px)",
      wide: "(min-width: 1536px)",
    },
    utils: {
      px: (config) => (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (config) => (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      pt: (config) => (value) => ({
        paddingTop: value,
      }),
      pr: (config) => (value) => ({
        paddingRight: value,
      }),
      pb: (config) => (value) => ({
        paddingBottom: value,
      }),
      pl: (config) => (value) => ({
        paddingLeft: value,
      }),
    },
  });
