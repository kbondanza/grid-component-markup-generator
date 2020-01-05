export const theme = {
  colors: {
    primary: "#1b2a49",
    primaryDark: "#012e6f",
    secondary: "#00909e",
    secondaryBright: "#00b8c9",
    tertiaryLight: "#d1e2ff",
    tertiary: "#465881",
    black: "#000",
    grey: "#c9d1d3",
    white: "#fff"
  },
  fontSizes: [16, 18, 20, 24, 28, 32, 36, 40, 44, 48],
  fontWeights: {
    semibold: 600
  },
  // margin and padding
  space: [0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 64, 72],
  breakpoints: [40, 52, 72].map(n => n + "rem"),
  letterSpacing: {
    large: "1.2px"
  }
};
