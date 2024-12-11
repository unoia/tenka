
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles.css';

const buttonSprinkles = defineProperties({
  defaultCondition: 'phone',
  conditions: {
    phone: {},
    tablet: { '@media': 'screen and (min-width: 600px)' },
    desktop: { '@media': 'screen and (min-width: 1136px)' },
  },
  properties: {
    width: { hug: "fit-content", full: "100%" },
  },
  responsiveArray: ['phone', 'tablet', 'desktop']
});

export const buttonAtoms = createSprinkles(buttonSprinkles);
export type ButtonSprinkles = Parameters<typeof buttonAtoms>[0];

export const buttonRecipe = recipe({
  base: {
    cursor: 'pointer',
    fontWeight: vars['text-weight'].medium,
    borderWidth: '1px',
    borderStyle: "solid",
    position: 'relative',
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  variants: {
    width: {
      hug: buttonAtoms({ width: "hug" }),
      full: buttonAtoms({ width: "full" }),
    },
    size: {
      compact: {
        fontSize: vars['text-size-label'].s,
        lineHeight: vars['text-line-label'].m
      },
      small: {
        fontSize: vars['text-size-label'].s,
        lineHeight: vars['text-line-label'].m
      },
      medium: {
        fontSize: vars['text-size-label'].m,
        lineHeight: vars['text-line-label'].l
      },
      large: {
        fontSize: vars['text-size-label'].l,
        lineHeight: vars['text-line-label'].l
      },
    },
    shape: {
      rect: { borderRadius: vars.radius.field },
      circle: { borderRadius: vars.radius.rounded },
      square: { borderRadius: vars.radius.s },
      pill: { borderRadius: vars.radius.rounded },
    },
    color: {
      primary: {
        color: vars.text['primary-inverse'],
        backgroundColor: vars.bg['primary-inverse'],
        borderColor: vars.bg['primary-inverse'],
        transition: 'all .36s ease-out',

        selectors: {
          "&.focus-visible": {
            outline: 'none',
            boxShadow: vars.shadow['button-focus'],
            transition: 'all .28s ease-out'
          },
          "&:hover": {
            backgroundColor: vars.bg['primary-inverse-hover'],
            transition: 'all .28s ease-out',
          },
          "&.pressed": {
            backgroundColor: vars.bg['primary-inverse-pressed'],
            transition: 'all .28s ease-out',
          },
          "&:disabled": {
            backgroundColor: vars.bg['primary-inverse-disabled'],
            borderColor: vars.bg['primary-inverse-disabled'],
            color: vars.text['primary-disabled'],
            transition: 'all .28s ease-out'
          },
        },
      },

      secondary: {
        color: vars.text.primary,
        backgroundColor: vars.bg.secondary,
        borderColor: vars.bg.secondary,

        selectors: {
          "&.focus-visible": {
            outline: 'none',
            boxShadow: vars.shadow['button-focus'],
            transition: 'all .28s ease-out'
          },
          "&:hover": {
            backgroundColor: vars.bg['secondary-hover'],
            borderColor: vars.bg['secondary-hover'],
            transition: 'all .28s ease-out',
          },
          "&.pressed": {
            backgroundColor: vars.bg['secondary-pressed'],
            borderColor: vars.bg['secondary-pressed'],
            transition: 'all .28s ease-out',
          },
          "&.active": {
            backgroundColor: vars.bg['secondary-inverse'],
            borderColor: vars.bg['secondary-inverse'],
            color: vars.text['primary-inverse'],
            transition: 'all .28s ease-out',
            "&:hover": {
              backgroundColor: vars.bg['secondary-inverse-hover'],
              borderColor: vars.bg['secondary-inverse-hover'],
              transition: 'all .28s ease-out'
            },
            "&.pressed": {
              backgroundColor: vars.bg['secondary-inverse-pressed'],
              borderColor: vars.bg['secondary-inverse-pressed'],
              transition: 'all .28s ease-out'
            },
            "&:disabled": {
              backgroundColor: vars.bg['primary-inverse-disabled'],
              borderColor: vars.bg['primary-inverse-disabled'],
              color: vars.text['primary-disabled'],
            }
          },
          "&:disabled": {
            backgroundColor: vars.bg['secondary-disabled'],
            borderColor: vars.bg['secondary-disabled'],
            color: vars.text['primary-disabled'],
            transition: 'all .28s ease-out'
          },
        },
      },

      tertiary: {
        color: vars.text.primary,
        backgroundColor: 'transparent',
        borderColor: 'transparent',

        selectors: {
          "&.focus-visible": {
            outline: 'none',
            boxShadow: vars.shadow['button-focus'],
            transition: 'all .28s ease-out'
          },
          "&:hover": {
            backgroundColor: vars.bg['secondary'],
            borderColor: vars.bg['secondary'],
            transition: 'all .28s ease-out',
          },
          "&.pressed": {
            backgroundColor: vars.bg['secondary-hover'],
            borderColor: vars.bg['secondary-hover'],
            transition: 'all .28s ease-out',
          },
          "&:disabled": {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: vars.text['primary-disabled'],
            transition: 'all .28s ease-out'
          },
        },
      },
      ghost: { color: vars.text.primary, backgroundColor: 'transparent', borderColor: 'transparent' },
      brand: { color: vars.text['primary-inverse'], backgroundColor: vars.bg['primary-brand'], borderColor: vars.bg['primary-brand'] },
      light: { color: vars.text.primary, backgroundColor: vars.bg.primary, borderColor: vars.bg.primary },
      danger: { color: vars.text['primary-inverse'], backgroundColor: vars.text['error-inverse'], borderColor: vars.text['error-inverse'] },
      critical: { color: vars.text['primary-inverse'], backgroundColor: vars.text['error-inverse'], borderColor: vars.text['error-inverse'], },
    }
  },
  compoundVariants: [
    {
      variants: { size: 'compact', shape: 'rect' },
      style: {
        padding: "7px 11px",
        selectors: {
          "&:before": {
            content: " ",
            position: "absolute",
            // backgroundColor: 'rgba(0,0,0,.12)',
            width: "calc(100% + 2px)",
            height: vars.space.xl,
            minHeight: vars.space.xl,
            top: '50%',
            left: "50%",
            transform: 'translateX(-50%) translateY(-50%)',
          },
        }
      }
    },
    {
      variants: { size: 'small', shape: 'rect' },
      style: {
        padding: "7px 11px",
        selectors: {
          "&:before": {
            content: " ",
            position: "absolute",
            // backgroundColor: 'rgba(0,0,0,.12)',
            width: "calc(100% + 2px)",
            height: vars.space.xl,
            minHeight: vars.space.xl,
            top: '50%',
            left: "50%",
            transform: 'translateX(-50%) translateY(-50%)',
          }
        }
      }
    },
    { variants: { size: 'medium', shape: 'rect' }, style: { padding: "11px 19px" } },
    { variants: { size: 'large', shape: 'rect' }, style: { padding: "15px 23px" } },

    { variants: { size: 'compact', shape: 'pill' }, style: { padding: "15px 23px" } },
    { variants: { size: 'small', shape: 'pill' }, style: { padding: "15px 23px" } },
    { variants: { size: 'medium', shape: 'pill' }, style: { padding: "15px 23px" } },
    { variants: { size: 'large', shape: 'pill' }, style: { padding: "15px 23px" } },

    {
      variants: { size: 'compact', shape: 'square' },
      style: {
        borderRadius: vars.radius.field,
        width: '36px',
        height: '36px',
        minWidth: '36px',
        minHeight: '36px',

        selectors: {
          "&:before": {
            content: " ",
            position: "absolute",
            width: vars.space.xl,
            height: vars.space.xl,
            minWidth: vars.space.xl,
            minHeight: vars.space.xl,
            top: '-7px',
            left: '-7px',
          },
        }
      }
    },
    {
      variants: { size: 'small', shape: 'square' },
      style: {
        borderRadius: vars.radius.field,
        width: '36px',
        height: '36px',
        minWidth: '36px',
        minHeight: '36px',

        selectors: {
          "&:before": {
            content: " ",
            position: "absolute",
            width: vars.space.xl,
            height: vars.space.xl,
            minWidth: vars.space.xl,
            minHeight: vars.space.xl,
            top: '-7px',
            left: '-7px',
          },
        }
      }
    },
    {
      variants: { size: 'medium', shape: 'square' },
      style: {
        borderRadius: vars.radius.field,
        width: vars.space.xl,
        height: vars.space.xl,
        minWidth: vars.space.xl,
        minHeight: vars.space.xl,
      }
    },
    {
      variants: { size: 'large', shape: 'square' },
      style: {
        borderRadius: vars.radius.field,
        width: vars.space.xxl,
        height: vars.space.xxl,
        minWidth: vars.space.xxl,
        minHeight: vars.space.xxl,
      }
    },

    {
      variants: { size: 'compact', shape: 'circle' },
      style: {
        borderRadius: vars.radius.rounded,
        width: '36px',
        height: '36px',
        minWidth: '36px',
        minHeight: '36px',

        selectors: {
          "&:before": {
            content: " ",
            position: "absolute",
            width: vars.space.xl,
            height: vars.space.xl,
            minWidth: vars.space.xl,
            minHeight: vars.space.xl,
            top: '-7px',
            left: '-7px',
          },
        }
      }
    },
    {
      variants: { size: 'small', shape: 'circle' },
      style: {
        borderRadius: vars.radius.rounded,
        width: '36px',
        height: '36px',
        minWidth: '36px',
        minHeight: '36px',

        selectors: {
          "&:before": {
            content: " ",
            position: "absolute",
            width: vars.space.xl,
            height: vars.space.xl,
            minWidth: vars.space.xl,
            minHeight: vars.space.xl,
            top: '-7px',
            left: '-7px',
          },
        }
      }
    },
    {
      variants: { size: 'medium', shape: 'circle' },
      style: {
        borderRadius: vars.radius.rounded,
        width: vars.space.xl,
        height: vars.space.xl,
        minWidth: vars.space.xl,
        minHeight: vars.space.xl,
      }
    },
    {
      variants: { size: 'large', shape: 'circle' },
      style: {
        borderRadius: vars.radius.rounded,
        width: vars.space.xxl,
        height: vars.space.xxl,
        minWidth: vars.space.xxl,
        minHeight: vars.space.xxl,
      }
    },
  ],
  defaultVariants: {
    size: 'medium',
    color: 'secondary',
    shape: 'rect',
    width: 'hug'
  }
})
export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;