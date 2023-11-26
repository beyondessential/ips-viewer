import * as COLORS from "../constants/colors";

export const theme = {
  themeName: "tamanu",
  palette: {
    primary: {
      main: COLORS.BLUE,
    },
    secondary: {
      main: COLORS.YELLOW,
    },
    text: {
      primary: COLORS.FONT_DARKGREY,
      secondary: COLORS.FONT_MIDGREY,
      tertiary: COLORS.FONT_LIGHTGREY,
    },
  },
  typography: {
    fontFamily: ["Poppins", '"Helvetica Neue"', "Arial", "sans-serif"].join(
      ","
    ),
    button: {
      textTransform: 'none'
    }
  },
  shape: { borderRadius: 3 },
  overrides: {
    MuiCard: {
      root: {
        borderColor: COLORS.GREY_DE,
      },
    },
  },
};
