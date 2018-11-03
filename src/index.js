import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

import App from './App';

/**
* Redux Store Setup
* */
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
});

const initialState = {
    products: [{name: 'iPhone'}],
    user: 'Michael'
};

const enableReduxDevTools = window.devToolsExtension && window.devToolsExtension();

const store = createStore(allReducers, initialState, enableReduxDevTools);

/**
 * End of Redux Setup
 * */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));