import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rootSlice from "./rootSlice";

export function createReducerManager(initialReducers) {
  const reducers = { ...initialReducers };
  var configuredStore = null;

  return {
    reduce: () => {
      if(configuredStore) return configuredStore;

      configuredStore = configureStore({
        reducer: { ...reducers },
      });

      return configuredStore;
    },
    add: (name, reducer) => {
      if (!name || reducers[name]) {
        return;
      }

      reducers[name] = reducer;

      const newReducers = combineReducers({
        ...reducers
      })

      configuredStore.replaceReducer(newReducers);
      console.log(`Reducer ${name} was added`)
    },
    remove: (name) => {
      if (!name || !reducers[name]) {
        return;
      }

      delete reducers[name];

      const newReducers = combineReducers({
        ...reducers
      })

      configuredStore.replaceReducer(newReducers);
      console.log(`Reducer ${name} was removed`)
    },
  };
}

const staticReducers = {
  root: rootSlice,
 };

export function configureStoreManager() {
  const reducerManager = createReducerManager(staticReducers);

  const store = reducerManager.reduce();

  store.reducerManager = reducerManager;

  return store;
}
