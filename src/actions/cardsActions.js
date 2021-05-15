import { SET_CARDS_STATE } from './types';

export const setCardsState = (payload) => ({
  type: SET_CARDS_STATE,
  payload,
});
