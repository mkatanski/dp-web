import { combineReducers } from "redux";
import { deploymentsReducer } from "./deployments";
import { templatesReducer } from "./templates";

export const rootReducer = combineReducers({
  deploymentsReducer,
  templatesReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export type ReducerName = keyof RootReducerType;
