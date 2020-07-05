import { compose, createStore, StoreEnhancer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "store";

export const configureStore = () => {
  let composedEnhancers: StoreEnhancer<{}, {}>;

  if (process.env.NODE_ENV === "development") {
    composedEnhancers = composeWithDevTools();
  } else {
    composedEnhancers = compose();
  }

  return createStore(rootReducer, composedEnhancers);
};
