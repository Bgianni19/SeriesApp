import { SET_CARDS_STATE } from "../actions/types";

const initialState = { cards: [] };

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default cardsReducer;
