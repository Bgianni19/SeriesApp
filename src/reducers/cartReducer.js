import { SET_CART_STATE } from "../actions/types";

const initialState = { items: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_STATE:
      return;
    default:
      return state;
  }
};

export default cartReducer;
