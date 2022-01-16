import { combineReducers } from 'redux';
import { productsReducer } from '@redux/products/reducer';
import { cartReducer } from '@redux/cart/reducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
