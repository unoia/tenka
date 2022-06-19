/*
  z-index
*/

export const zIndex: { [key: string | number]: any } = {
  behind: -9,
  reset: 'auto',
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  s: 1,
  m: 2,
  l: 3,
  dropdownBackdrop: 90,
  dropdown: 100,
  sticky: 200,
  modalBackdrop: 290,
  modal: 300,
  notification: 400,
  navbar: 999999999,
  top: 9999999999,
} as const

export type ZIndex = keyof typeof zIndex
