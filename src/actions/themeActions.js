import { SET_DEFAULT_THEME, SET_DARK_THEME } from "./types";

export const setDefaultTheme = () => ({
  type: SET_DEFAULT_THEME,
});

export const setDarkTheme = (payload) => ({
  type: SET_DARK_THEME,
  payload,
});
