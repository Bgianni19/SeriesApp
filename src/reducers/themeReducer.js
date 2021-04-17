import defaultTheme from "../themes/defaultTheme";
import darkTheme from "../themes/darkTheme";

const initialState = { theme: defaultTheme };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SetDefaultTheme":
      return { ...state, theme: defaultTheme };
    case "SetDarkTheme":
      return { ...state, theme: darkTheme };
    default:
      return state;
  }
};

export default themeReducer;
