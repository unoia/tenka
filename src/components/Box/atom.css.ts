import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from '../../styles.css';
import { display } from './../../styles/variables'

const atomicStyles = defineProperties({
  defaultCondition: 'phone',
  conditions: {
    phone: {},
    tablet: { '@media': 'screen and (min-width: 600px)' },
    desktop: { '@media': 'screen and (min-width: 1136px)' },
  },
  properties: {
    fontWeight: vars['text-weight'],
    display,
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between'
    ],
    alignItems: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'baseline',
    ],
    boxShadow: vars.shadow,
    columnGap: vars.space,
    rowGap: vars.space,
    padding: vars.space,
    paddingTop: vars.space,
    paddingRight: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingBlock: vars.space,
    paddingInline: vars.space,
    margin: vars.space,
    marginTop: vars.space,
    marginRight: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginBlock: vars.space,
    marginInline: vars.space,
    borderRadius: vars.radius,
    background: vars.bg,
    backgroundColor: vars.bg,
    borderColor: vars.border,
    color: vars.text,
    // ...
  },
  shorthands: {
    spacex: ['columnGap'],
    gapx: ['columnGap'],
    spacey: ['rowGap'],
    gapy: ['rowGap'],
    gap: ['rowGap', 'columnGap'],
    pt: ['paddingTop'],
    pr: ['paddingRight'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    mt: ['marginTop'],
    mr: ['marginRight'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
  }
  // ...
});

export const atoms = createSprinkles(atomicStyles);