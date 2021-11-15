import { createStore, compose } from '@reduxjs/toolkit';

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
);

export default store;
