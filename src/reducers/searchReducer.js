import { GET_INPUT_VALUE_ON_CHANGE } from '../actions/types';

const initialState = { inputOnChange: '', input: '' };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return { ...state, ...action.payload };
    case GET_INPUT_VALUE_ON_CHANGE:
      return { ...state, inputOnChange: action.payload.inputValueOnChange };
    case 'GetInputValue':
      return { ...state, input: state.inputOnChange };
    default:
      return state;
  }
};

export default searchReducer;
