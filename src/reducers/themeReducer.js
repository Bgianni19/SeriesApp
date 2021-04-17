import defaultTheme from "../themes/defaultTheme";

const initialState = { theme: defaultTheme };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SetDefaultTheme":
      return { ...state, theme: defaultTheme };
    case "SetDarkTheme":
      return { ...state, theme: action.payload.theme };
    default:
      return state;
  }
};

export default themeReducer;
