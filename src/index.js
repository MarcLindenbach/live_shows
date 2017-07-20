/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import './server';
import './index.css';
import { App } from './components';
import { ShowView } from './containers';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore);
const store = createStoreWithMiddleware(reducers);

/*
 * The provider wraps the entire app so the state will be available across all components
 * Usually the Shows View component would not be hardcoded, and instead React-Router would render
 * the App component with the correct child component based on the active route
 */
ReactDOM.render(
  <Provider store={store}>
    <App>
      <ShowView />
    </App>
  </Provider>
  , document.getElementById('root'),
);
