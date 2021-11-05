import { Middleware } from "redux";
import configs from "src/config";

export const actionLog: Middleware = (store) => (next) => (action) => {
  configs.DEBUG == "true" && console.log("state 当前", store.getState());
  configs.DEBUG == "true" && console.log("fire action ", action);
  next(action);
  configs.DEBUG == "true" && console.log("state 更新", store.getState());
};
