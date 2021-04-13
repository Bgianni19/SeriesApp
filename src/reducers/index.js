import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import searchReducer from "./searchReducer";

const reducers = combineReducers({ themeReducer, searchReducer });

export default reducers;
