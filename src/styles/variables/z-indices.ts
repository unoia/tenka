/*
  z-index
*/

export const layer = {
  behind: -9,
  reset: 'auto',
  0: 0,
  1: 1,
  2: 2,
  dropdownBackdrop: 90,
  dropdown: 100,
  sticky: 200,
  modalBackdrop: 290,
  modal: 300,
  notification: 400,
  navbar: 999999999,
  top: 9999999999,
} as const

export const zIndex = layer
