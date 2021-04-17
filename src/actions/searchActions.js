import { GET_INPUT_VALUE_ON_CHANGE } from './types';

export const setSearchState = (payload) => ({
  type: 'SET_STATE',
  payload,
});

export function getInputValueOnChange(payload) {
  return {
    type: GET_INPUT_VALUE_ON_CHANGE,
    payload,
  };
}
