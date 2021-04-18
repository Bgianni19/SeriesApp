import { SET_THEME_STATE } from "../actions/types";
import defaultTheme from "../themes/defaultTheme";

const initialState = { theme: defaultTheme };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME_STATE:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
