import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import searchReducer from "./searchReducer";
import cardsReducer from "./cardsReducer";

const reducers = combineReducers({
  themeReducer,
  searchReducer,
  cardsReducer,
});

export default reducers;
