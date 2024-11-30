import { defineTextStyles } from "@pandacss/dev"

export const textStyles = defineTextStyles({
  medium: {
    description: "The large body text style - used in paragraphs",
    value: {
      fontFamily: "var(--tenka-font-family-primary)",
      fontWeight: "var(--tenka-font-weight-regular)",
      fontSize: "var(--tenka-font-size-body-medium)",
      lineHeight: 1,
      letterSpacing: "normal",
    },
  },
  large: {
    description: "The large body text style - used in paragraphs",
    value: {
      fontFamily: "var(--tenka-font-family-primary)",
      fontWeight: "var(--tenka-font-weight-regular)",
      fontSize: "var(--tenka-font-size-heading-3)",
      lineHeight: 1,
      letterSpacing: "normal",
    },
  },
})
