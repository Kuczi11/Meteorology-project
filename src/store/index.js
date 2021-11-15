import { createStore, compose } from '@reduxjs/toolkit';
import loaderReducer from './loader/reducer';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  // Compose with redux devtools if it exist in the browser
  const {
    // @ts-ignore
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devToolsCompose = null,
  } = window;
  composeEnhancers = devToolsCompose || compose;
}

const store = createStore(
  loaderReducer,
);

export default store;
