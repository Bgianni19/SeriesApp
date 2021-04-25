import { SET_CART_STATE } from "./types";

export const setCartState = (payload) => ({
  type: SET_CART_STATE,
  payload,
});
