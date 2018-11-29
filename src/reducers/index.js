import { combineReducers } from 'redux';

/**
 * Reducers
 * */
import productsReducer from './products-reducer';
import userReducer from './user-reducer';
import counterReducer from './counter-reducer';
import githubReducer from './github-reducer';


const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer,
    counter: counterReducer,
    github: githubReducer
});

export default allReducers;