import { combineReducers } from 'redux';

import { productsReducer } from '@redux/products/reducer';
import { cartReducer } from '@redux/cart/reducer';
import { customerReducer } from '@redux/customer/reducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    customer: customerReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
