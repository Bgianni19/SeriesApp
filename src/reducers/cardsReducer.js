const initialState = { cards: [] };

const cardsReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "GetCards":
      newState.cards = action.payload.cards;
      return newState;
    default:
      return newState;
  }
};

export default cardsReducer;
