import { combineReducers } from "redux"
import Layout from "./layout/reducer";
import login from "./auth/login/reducer";
import profile from "./auth/profile/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  login,
  profile,
})

export default rootReducer
