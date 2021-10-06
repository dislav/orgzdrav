import { combineReducers } from 'redux';
import { cartReducer } from './cart/reducer';
import { userReducer } from './user/reducer';
import { productsReducer } from './products/reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    products: productsReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
