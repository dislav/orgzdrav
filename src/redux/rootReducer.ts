import { combineReducers } from 'redux';
import { productsReducer } from './products/reducer';

const rootReducer = combineReducers({
    products: productsReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
