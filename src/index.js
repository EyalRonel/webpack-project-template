import './main.css';

/**
 * Dependencies
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Store
 * */
import store from './store';

/**
 * Components
 * */
import App from './App';

/**
 * Render App
 * */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);