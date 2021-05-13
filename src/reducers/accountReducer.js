import { SET_ACCOUNT_STATE } from "../actions/types";

const initialState = { loggedIn: false };

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default accountReducer;
