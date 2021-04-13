import defaultTheme from "../themes/defaultTheme";
import darkTheme from "../themes/darkTheme";

const initialState = { theme: darkTheme };

const themeReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SetDefaultTheme":
      newState.theme = defaultTheme;
      return newState;
    case "SetDarkTheme":
      newState.theme = darkTheme;
      return newState;
    default:
      return newState;
  }
};

export default themeReducer;
