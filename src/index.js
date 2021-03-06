
// src/index.js

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import thunk from 'react-thunk';

const myStore = applyMiddleware(thunk)(createStore);

render(
  <Provider store={myStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.app'));
