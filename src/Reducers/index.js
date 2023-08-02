import counterReducer from "./counter";
import selection from "./selection";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  selected: selection,
})

export default allReducers;