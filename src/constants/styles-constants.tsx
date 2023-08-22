//TODO: unused
export enum ICON_TYPE {
  Heart = 'heart',
  Search = 'magnify',
}

export const BACKGROUND_COLOR = {
  white: '#ffffff',
  ruby: '#e91e63',
  lightgrey: '#DBDBDB',
};

export enum BUTTON_TYPES {
  Primary = 'primary',
  Secondary = 'secondary',
  Disabled = 'disabled',
}

export const ALIGN = {
  absolute: 'absolute',
  top: 'top',
  bottom: 'bottom',
  center: 'center',
  left: 'left',
  row: 'row',
  wrap: 'wrap',
  column: 'column',
  rowReverse: 'row-reverse',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  spaceBetween: 'space-between',
} as const;

export const COLOR = {
  black: '#000000',
  white: '#ffffff',
  ghostWhite: '#FAFBFF',
  ruby: '#e91e63',
  red: '#D31E1E',
  gray9: '#171717',
  gray920: '#17171733',
  gray31: '#4f4f4f',
  gray86: '#DBDBDB',
  davysGray: '#555555',
  darkCharcoal: '#333333',
  silver: '#C0C0C0',
  lightgrey: '#EDEDED',
  lightgrey20: '#EDEDED33',
  blue: '#2760EA',
  hawkesBlue: '#E6EDFE',
  primarySubdued: '#091634',
  turquoise: '#E0EEF7',
  backdropBlack: '#17171799',
  transpGrey: '#e1e1e140',
  transparent: 'transparent',
} as const;

export const BUTTON_COLOR = {
  primary: COLOR.blue,
  secondary: COLOR.hawkesBlue,
  disabled: COLOR.gray9,
};

export const IMG_SIZE = {
  XS: {
    width: 16,
    height: 16,
  },
  XS2: {
    width: 24,
    height: 24,
  },
  S: {
    width: 32,
    height: 32,
  },
  M: {
    width: 64,
    height: 64,
  },
  L: {
    width: 192,
    height: 192,
  },
  XL: {
    width: 512,
    height: 512,
  },
};

export const LINE_HEIGHT = {
  normal: 20,
  double: 24,
  spaced: 28,
};

export const FONT_WEIGHT = {
  light: '200',
  normal: '400',
  semiBold: '500',
  bold: '600',
  dark: '800',
} as const;

export const FONT_SIZE = {
  small: 12,
  paragraph: 14,
  caption: 16,
  subheader: 20,
  header: 24,
};

export const FONT_COLOR = {
  header: COLOR.black,
  subheader: COLOR.gray9,
  caption: COLOR.darkCharcoal,
  disabled: COLOR.davysGray,
  externalLink: COLOR.blue,
  subtitle: COLOR.gray31,
  buttonPrimary: COLOR.ghostWhite,
  buttonSecondary: COLOR.primarySubdued,
  buttonDisabled: COLOR.davysGray,
};

export const FONT_FAMILY = {
  regular: 'Roboto',
} as const;
