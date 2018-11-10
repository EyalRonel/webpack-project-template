import { combineReducers } from 'redux';

/**
 * Reducers
 * */
import productsReducer from './products-reducer';
import userReducer from './user-reducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer,
});

export default allReducers;