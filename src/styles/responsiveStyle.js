import omit from 'lodash.omit'

import { breakpoints } from './tokens'

export const breakpointQuery = omit(breakpoints, 'small-phone')

const makeMediaQuery = (breakpoint) => (styles) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [breakpointQuery[breakpoint]]: styles,
      }

const mediaQuery = {
  phone: makeMediaQuery('phone'),
  tablet: makeMediaQuery('tablet'),
  tabletLandscape: makeMediaQuery('tablet-landscape'),
  desktop: makeMediaQuery('desktop'),
  wide: makeMediaQuery('wide'),
}

export const responsiveStyle = ({
  smallPhone,
  phone,
  tablet,
  tabletLandscape,
  desktop,
  wide,
}) => ({
  ...omit(smallPhone, '@media'),
  ...(phone || tablet || tabletLandscape || desktop || wide
    ? {
        '@media': {
          ...mediaQuery.phone(phone ?? {}),
          ...mediaQuery.tablet(tablet ?? {}),
          ...mediaQuery.tabletLandscape(tabletLandscape ?? {}),
          ...mediaQuery.desktop(desktop ?? {}),
          ...mediaQuery.wide(wide ?? {}),
        },
      }
    : {}),
})
