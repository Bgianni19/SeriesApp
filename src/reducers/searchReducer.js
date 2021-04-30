import { SET_SEARCH_STATE } from "../actions/types";

const initialState = { input: "" };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default searchReducer;
