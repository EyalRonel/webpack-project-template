import thunk from 'redux-thunk';
import { applyMiddleware, compose , createStore } from 'redux';
import allReducers from '../reducers';

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const initialState = {
    products: [{name: 'iPhone'}],
    user: 'Michael'
};

const store = createStore(allReducers, initialState, allStoreEnhancers);

export default store;