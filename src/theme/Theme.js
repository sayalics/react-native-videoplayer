import colors from '../theme/Colors';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.theme_1_background,
    text: colors.theme_1_text,
    button: colors.silver,
    // primary: "rgb(255, 45, 85)",
    // card: "rgb(255, 255, 255)",
    // border: "rgb(199, 199, 204)",
    // notification: "rgb(255, 69, 58)",
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.theme_2_background,
    text: colors.theme_2_text,
    button: colors.black,
    // primary: "rgb(255, 45, 85)",
    // card: "rgb(255, 255, 255)",
    // border: "rgb(199, 199, 204)",
    // notification: "rgb(255, 69, 58)",
  },
};
