import { styleVariants } from '@vanilla-extract/css';

const spaceScale = {
  xxs: 2,
  xs: 4,
  s: 8,
  sm: 12,
  m: 16,
  ml: 20,
  l: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const padding = styleVariants(
  spaceScale,
  (space) => ({
    padding: space
  })
);

export const paddingVertical = styleVariants(
  spaceScale,
  (space) => ({
    paddingTop: space,
    paddingBottom: space,
  })
);
export const paddingHorizontal = styleVariants(
  spaceScale,
  (space) => ({
    paddingLeft: space,
    paddingRight: space,
  })
);

export const paddingTop = styleVariants(
  spaceScale,
  (space) => ({
    paddingTop: space,
  })
);
export const paddingRight = styleVariants(
  spaceScale,
  (space) => ({
    paddingRight: space
  })
);
export const paddingBottom = styleVariants(
  spaceScale,
  (space) => ({
    paddingBottom: space,
  })
);
export const paddingLeft = styleVariants(
  spaceScale,
  (space) => ({
    paddingLeft: space,
  })
);