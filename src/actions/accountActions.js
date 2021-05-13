import { SET_ACCOUNT_STATE } from "./types";

export const setAccountState = (payload) => ({
  type: SET_ACCOUNT_STATE,
  payload,
});
