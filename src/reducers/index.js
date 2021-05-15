import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import searchReducer from './searchReducer';
import cardsReducer from './cardsReducer';
import accountReducer from './accountReducer';

const reducers = combineReducers({
  themeReducer,
  searchReducer,
  cardsReducer,
  accountReducer,
});

export default reducers;
