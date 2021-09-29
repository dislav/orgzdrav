import { createSelector } from 'reselect';
import { RootReducer } from '@redux/rootReducer';

export const getCart = (state: RootReducer) => state.cart;

export const getCartProductCount = createSelector(
    getCart,
    (state) => state.contents.productCount
);

export const getCartItemCount = createSelector(
    getCart,
    (state) => state.contents.itemCount
);
