import { combineReducers } from "redux";
import { deploymentsReducer } from "./deployments";

export const rootReducer = combineReducers({ deploymentsReducer });

export type RootReducerType = ReturnType<typeof rootReducer>;
export type ReducerName = keyof RootReducerType;
