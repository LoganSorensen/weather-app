import { combineReducers } from "redux";

import { setLocation } from "./setLocationReducer";

const rootReducer = combineReducers({
  setLocation,
});

export default rootReducer;
