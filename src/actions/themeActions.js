import { SET_THEME_STATE } from "./types";

export const setThemeState = (payload) => ({
  type: SET_THEME_STATE,
  payload,
});
