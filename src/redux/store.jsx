import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {};

function configureAppStore(preLoadedState) {
  const store = configureStore({
    reducer: rootReducer,
    preLoadedState: preLoadedState,
  });
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("//rootReducer");
    store.replaceReducer(rootReducer);
  }
  return store;
}
export default configureAppStore(initialState);
