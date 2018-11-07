import './main.css';

/**
 * Dependencies
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

/**
 * Reducers
 * */
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

/**
 * Components
 * */
import App from './App';

/**
* Store
* */
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const initialState = {
    products: [{name: 'iPhone'}],
    user: 'Michael'
};

const store = createStore(allReducers, initialState, allStoreEnhancers);


/**
 * Render App
 * */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);