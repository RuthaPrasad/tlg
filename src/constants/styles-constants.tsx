export enum ICON_TYPE {
  Insert = 'plus',
  Update = 'pencil-outline',
  Search = 'magnify',
  Menu = 'menu-down',
  Date = 'calendar',
  Dot = 'circle',
  Dismiss = 'close',
}

export const BACKGROUND_COLOR = {
  white: '#ffffff',
  ruby: '#e91e63',
  lightgrey: '#DBDBDB',
};

/* === GENERAL STYLE CONSTANTS === */

export enum NOTIFICATION_TYPES {
  NoOp = 'NoOp',
  Undo = 'Undo',
  Withdraw = 'Withdraw',
  Retry = 'Retry',
  Close = 'Close',
}

export enum TAG_TYPES {
  Filled = 'flat',
  Outlined = 'outlined',
}

export enum BUTTON_TYPES {
  Primary = 'primary',
  Secondary = 'secondary',
  Disabled = 'disabled',
}

// /* === DANK STYLE CHOICES === */
// export const SCREEN_RESPONSIVE_WIDTH = {
//   twoPercent: WIDTH * 0.02,
//   threePercent: WIDTH * 0.03,
//   quarterPercent: WIDTH * 0.25,
//   thirtyPercent: WIDTH * 0.3,
//   fortyPercent: WIDTH * 0.4,
//   fiftyPercent: WIDTH * 0.5,
//   sixtyPercent: WIDTH * 0.6,
//   seventyPercent: WIDTH * 0.7,
//   seventyFivePercent: WIDTH * 0.75,
//   ninetyNinePercent: WIDTH * 0.99,
//   hundredPercent: WIDTH,
// };

// export const SCREEN_RESPONSIVE_HEIGHT = {
//   onePercent: HEIGHT * 0.01,
//   twoPercent: HEIGHT * 0.02,
//   threePercent: HEIGHT * 0.03,
//   twoPointFivePercent: HEIGHT / 40,
//   twoPointTwoPercent: HEIGHT / 45,
//   quarterPercent: HEIGHT * 0.25,
//   hundredPercent: HEIGHT,
// };

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

export const BUTTON_BORDER = {
  align: {
    alignItems: ALIGN.center,
  },
  color: {
    borderColor: COLOR.gray86,
  },
  padding: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  round: {
    borderRadius: 99,
  },
  top: {
    borderTopWidth: 1,
  },
  box: {
    borderWidth: 1,
  },
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

export const FONT_TYPE = {
  paragraph: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.paragraph,
    fontWeight: FONT_WEIGHT.bold,
  },
  subtitle: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.small,
    fontWeight: FONT_WEIGHT.normal,
    color: FONT_COLOR.subtitle,
  },
  subheader: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.caption,
    fontWeight: FONT_WEIGHT.bold,
    color: FONT_COLOR.subheader,
  },
  subheading: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.subheader,
    fontWeight: FONT_WEIGHT.bold,
    color: FONT_COLOR.subheader,
  },
  header: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.caption,
    fontWeight: FONT_WEIGHT.dark,
    color: FONT_COLOR.subheader,
  },
  caption: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.caption,
    fontWeight: FONT_WEIGHT.bold,
    color: FONT_COLOR.subheader,
  },
};

export const SHADOW = {
  box: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: COLOR.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
};
