import { combineReducers } from "redux";
import { deploymentsReducer } from "./deployments";

export const rootReducer = combineReducers({ deploymentsReducer });
