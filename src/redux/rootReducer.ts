import { combineReducers } from 'redux';
import { cartReducer } from './cart/reducer';
import { userReducer } from '@redux/user/reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
