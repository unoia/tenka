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
      phone: `(min-width: 420px)`,
      tablet: `(min-width: 720px)`,
      desktop: `(min-width: 1024px)`,
      wide: `(min-width: 1536px)`,
    },
  });
