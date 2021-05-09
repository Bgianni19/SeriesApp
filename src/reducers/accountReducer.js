import { SET_ACCOUNT_STATE } from "../actions/types";

const initalState = {
  loginEmailOnChange: "",
  loginEmail: "",
  loginPasswordOnChange: "",
  loginPassword: "",

  signupEmailOnChange: "",
  signupEmail: "",
  signupPasswordOneOnChange: "",
  signupPasswordOne: "",
  signupPasswordTwoOnChange: "",
  signupPasswordTwo: "",
};

const accountReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_ACCOUNT_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default accountReducer;
