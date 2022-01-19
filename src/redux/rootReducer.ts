import { combineReducers } from 'redux';

import { productsReducer } from '@redux/products/reducer';
import { cartReducer } from '@redux/cart/reducer';
import { profileReducer } from '@redux/profile/reducer';
import { OrdersReducer } from '@redux/orders/reducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    profile: profileReducer,
    orders: OrdersReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
