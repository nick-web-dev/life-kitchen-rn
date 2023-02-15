import { createTheme } from "@shopify/restyle";

const palette = {
  greenPrimary: "#1ABE73",
  secondaryGreen: "rgba(26, 190, 115, 0.5)",
  white: "#FFFFFF",
  transparent: "transparent",
  black: "#000000",
  backgroundGrey: "#595959",

  grey1: "#2C2C2C",
  grey2: "rgba(255, 255, 255, 0.5)",
  grey3: "#C8C8C8",
  grey4: "#777777",
  grey5: "##989898",
  grey6: "#474747",
  grey7: "#262626",
  grey8: "#464646",

  lightGrey: "#CACACA",

  blue1: "#35C2FF",

  purple1: "#9E51FF",

  red1: "#FF4853",
  red2: "#FF4853",

  green1: "#05B68B",

  black1: "#171717",

  yellow1: "#FFCB45",
  yellow2: "#FFBB22",

  orange1: "#E37B00",
};

const commonFontStyles = {
  textAlign: "left",
};

const commonInputStyles = {
  textAlign: "left",
  borderRadius: "input",
  color: "black",
  paddingHorizontal: "xs",
};

const commonCTAStyles = {
  borderRadius: "cta",
};

export const theme = createTheme({
  colors: {
    brandGreen: palette.greenPrimary,
    secondary: palette.secondaryGreen,
    white: palette.white,
    transparent: palette.transparent,
    black: palette.black,
    backgroundGrey: palette.backgroundGrey,

    grey1: palette.grey1,
    grey2: palette.grey2,
    grey3: palette.grey3,
    grey4: palette.grey4,
    grey5: palette.grey5,
    grey6: palette.grey6,
    grey7: palette.grey7,
    grey8: palette.grey8,

    lightGrey: palette.lightGrey,

    purple1: palette.purple1,

    blue1: palette.blue1,

    red1: palette.red1,
    red2: palette.red2,

    green1: palette.green1,

    black1: palette.black1,

    yellow1: palette.yellow1,
    yellow2: palette.yellow2,

    orange1: palette.orange1,
  },
  spacing: {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "12": 12,
    "15": 15,
    "16": 16,
    "18": 18,
    "20": 20,
    "24": 24,
    "25": 25,
    "30": 30,
    "35": 35,
    "40": 40,
    "45": 45,
    "50": 50,
    "60": 60,
    "64": 64,
    "65": 65,
    "80": 80,
    "100": 100,
    "120": 120,
    "70": 70,
    "common-card-padding": 8,
    xxs: 5,
    xs: 10,
    s: 20,
    m: 30,
    l: 60,
    xl: 80,
    xxl: 100,
    xxxl: 120,
    ctaPaddingHorizontal: 20,
    ctaPaddingVertical: 15,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    giga: {
      ...commonFontStyles,
      fontSize: 80,
      lineHeight: 90,
      letterSpacing: -0.04,
    },
    bigTitle: {
      ...commonFontStyles,
      fontSize: 40,
      lineHeight: 45,
      letterSpacing: -0.03,
    },
    title: {
      ...commonFontStyles,
      fontSize: 27,
      lineHeight: 35,
      letterSpacing: -0.02,
    },
    smallTitle: {
      ...commonFontStyles,
      fontSize: 21,
      lineHeight: 25,
      letterSpacing: -0.01,
    },
    body: {
      ...commonFontStyles,
      fontSize: 17,
      lineHeight: 25,
    },
    smallBody: {
      ...commonFontStyles,
      fontSize: 15,
      lineHeight: 20,
    },
    caption: {
      ...commonFontStyles,
      fontSize: 13,
      lineHeight: 15,
    },
    label: {
      ...commonFontStyles,
      fontSize: 11,
      lineHeight: 15,
    },
    "fs:80": {
      ...commonFontStyles,
      fontSize: 80,
      lineHeight: 90,
      letterSpacing: -0.04,
    },
    "fs:40": {
      ...commonFontStyles,
      fontSize: 40,
      lineHeight: 45,
      letterSpacing: -0.03,
    },
    "fs:27": {
      ...commonFontStyles,
      fontSize: 27,
      lineHeight: 35,
      letterSpacing: -0.02,
    },
    "fs:24": {
      ...commonFontStyles,
      fontSize: 24,
      lineHeight: 36,
      letterSpacing: -0.01,
    },
    "fs:21": {
      ...commonFontStyles,
      fontSize: 21,
      lineHeight: 25,
      letterSpacing: -0.01,
    },
    "fs:18": {
      ...commonFontStyles,
      fontSize: 18,
      lineHeight: 25,
    },
    "fs:17": {
      ...commonFontStyles,
      fontSize: 17,
      lineHeight: 25,
    },
    "fs:16": {
      ...commonFontStyles,
      fontSize: 16,
      lineHeight: 24,
    },
    "fs:15": {
      ...commonFontStyles,
      fontSize: 15,
      lineHeight: 20,
    },
    "fs:14": {
      ...commonFontStyles,
      fontSize: 14,
      lineHeight: 20,
    },
    "fs:13": {
      ...commonFontStyles,
      fontSize: 13,
      lineHeight: 15,
    },
    "fs:12": {
      ...commonFontStyles,
      fontSize: 12,
      lineHeight: 15,
    },
    "fs:11": {
      ...commonFontStyles,
      fontSize: 11,
      lineHeight: 15,
    },
    "fs:10": {
      ...commonFontStyles,
      fontSize: 10,
      lineHeight: 14,
    },
    "fs:9": {
      ...commonFontStyles,
      fontSize: 9,
      lineHeight: 14,
    },
    "fs:8": {
      ...commonFontStyles,
      fontSize: 8,
      lineHeight: 14,
    },
    "fs:7": {
      ...commonFontStyles,
      fontSize: 7,
      lineHeight: 10,
    },
    "fs:30": {
      ...commonFontStyles,
      fontSize: 30,
      lineHeight: 35,
      letterSpacing: -1.6,
    },
  },
  borderRadii: {
    cta: 40,
    input: 10,
    noRounded: 0,
    "73": 73,
    "50": 50,
    "40": 40,
    "12": 12,
    "10": 10,
    "35": 35,
    "23": 23,
    "16": 16,
    "20": 20,
    "5": 5,
    "0": 0,
    "8": 8,
  },
  zIndices: {
    default: 1,
    "1": 1,
    "2": 2,
    "6": 6,
  },
  buttonVariants: {
    primary: {
      ...commonCTAStyles,
      backgroundColor: "brandGreen",
    },
    secondary: {
      ...commonCTAStyles,
      backgroundColor: "secondary",
    },
    tertiary: {
      ...commonCTAStyles,
      backgroundColor: "black",
    },
    outline: {
      ...commonCTAStyles,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "black",
    },
    disabled: {
      ...commonCTAStyles,
      backgroundColor: "grey2",
    },
    disabledDark: {
      ...commonCTAStyles,
      backgroundColor: "black",
    },
    ghost: {
      ...commonCTAStyles,
      backgroundColor: "transparent",
      color: "brandGreen",
      borderWidth: 0,
    },
    destructive: {
      ...commonCTAStyles,
      backgroundColor: "feedbackRed",
      color: "white",
    },
    inactive: {
      ...commonCTAStyles,
      backgroundColor: "transparent",
      color: "black30",
      borderWidth: 0,
      paddingTop: "25",
    },
  },
  inputVariants: {
    default: {
      ...commonInputStyles,
      backgroundColor: "grey2",
    },
    active: {
      ...commonInputStyles,
      backgroundColor: "white",
      borderWidth: 2,
      borderColor: "brandGreen",
    },
    invalid: {
      ...commonInputStyles,
      backgroundColor: "grey2",
      borderWidth: 2,
      borderColor: "feedbackRed",
    },
    disabled: {
      ...commonInputStyles,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "black15",
      color: "black",
    },
    verify: {
      ...commonInputStyles,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "black15",
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    brandGreen: palette.greenPrimary,
    secondary: palette.secondaryGreen,
    white: palette.white,
    transparent: palette.transparent,
    black: palette.black,
    backgroundGrey: palette.backgroundGrey,

    grey1: palette.grey1,
    grey2: palette.grey2,
    grey3: palette.grey3,
    grey4: palette.grey4,
    grey5: palette.grey5,
    grey6: palette.grey6,
    grey7: palette.grey7,
    grey8: palette.grey8,

    lightGrey: palette.lightGrey,

    purple1: palette.purple1,

    red1: palette.red1,
    red2: palette.red2,

    blue1: palette.blue1,

    green1: palette.green1,

    black1: palette.black1,

    yellow1: palette.yellow1,
    yellow2: palette.yellow2,

    orange1: palette.orange1,
  },
};
