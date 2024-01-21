import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./reducer";
import logger from "redux-logger";



const store = legacy_createStore(reducer,applyMiddleware(thunk,logger));

export {store};