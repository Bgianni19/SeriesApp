const initialState = { inputOnChange: "", input: "" };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GetInputValueOnChange":
      return { ...state, inputOnChange: action.payload.inputValueOnChange };
    case "GetInputValue":
      return { ...state, input: state.inputOnChange };
    default:
      return state;
  }
};

export default searchReducer;
