import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import injectClientAndGetMiddleware from 'lib/promiseMiddleware';
import reducer from 'reducer';

export default function configureStore(client, preloadedState) {
  const middleware = [
    applyMiddleware(injectClientAndGetMiddleware(client), thunk),
  ];

  if (typeof window !== 'undefined' && window.devToolsExtension) {
    middleware.push(window.devToolsExtension());
  }

  const finalCreateStore = compose(...middleware)(createStore);

  const store = finalCreateStore(reducer, preloadedState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducer', () => {
      const nextReducer = require('reducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
