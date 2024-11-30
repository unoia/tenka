import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const spaces = {
  none: 0,
  xs: 4,
  s: 8,
  sm: 12,
  m: 16,
  ml: 24,
  l: 32,
  xl: 48,
  xxl: 64,
  xxxl: 96,
  huge: 128
};

const colors = {
  primary: 'blue',
  secondary: "rebeccapurple"
  // ...
};

export const radius = {
  none: 0,
  s: 8,
  m: 12,
  l: 16,
}

const atomicStyles = defineProperties({
  defaultCondition: 'mobile',
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 600px)' },
    desktop: { '@media': 'screen and (min-width: 1136px)' },
  },
  properties: {
    padding: spaces,
    margin: spaces,
    borderRadius: radius,
    backgroundColor: colors,
    color: colors
    // ...
  },
  // ...
});

export const atoms = createSprinkles(atomicStyles);