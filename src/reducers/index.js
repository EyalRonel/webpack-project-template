import { combineReducers } from 'redux';

/**
 * Reducers
 * */
import productsReducer from './products-reducer';
import userReducer from './user-reducer';
import counterReducer from './counter-reducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer,
    counter: counterReducer,
});

export default allReducers;