import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import article from "./articleReducer";

export default combineReducers({
  auth,
  alert,
  article,
});