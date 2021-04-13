const initialState = { inputOnChange: "", input: "" };

const searchReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "GetInputValueOnChange":
      newState.inputOnChange = action.payload.inputValueOnChange;
      return newState;
    case "GetInputValue":
      newState.input = newState.inputOnChange;
      return newState;
    default:
      return newState;
  }
};

export default searchReducer;
