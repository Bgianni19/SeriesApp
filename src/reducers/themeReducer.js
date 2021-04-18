import { SET_THEME, SET_DEFAULT_THEME, SET_DARK_THEME } from "../actions/types";
import defaultTheme from "../themes/defaultTheme";
import darkTheme from "../themes/darkTheme";

const initialState = { theme: defaultTheme };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_DEFAULT_THEME:
      return { ...state, theme: defaultTheme };
    case SET_DARK_THEME:
      return { ...state, theme: darkTheme };
    default:
      return state;
  }
};

export default themeReducer;
