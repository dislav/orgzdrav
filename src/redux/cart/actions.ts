import { createAction } from 'redux-actions';
import { GetCartQueryProps } from '@graphql/queries/cart';

export const SET_CART = 'SET_CART';

export const CLEAR_CART = 'CLEAR_CART';

export const setCart = createAction<GetCartQueryProps['cart']>(SET_CART);

export const clearCart = createAction(CLEAR_CART);
