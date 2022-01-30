import { createSelector } from 'reselect';
import { RootReducer } from '@redux/rootReducer';
import { PromiseStatus } from '@redux/types';

export const getCart = (state: RootReducer) => state.cart;

export const getCartStatus = createSelector(getCart, (cart) => cart.status);

export const getIsCartLoading = createSelector(
    getCartStatus,
    (status) => status === PromiseStatus.Loading
);

export const getIsCartLoaded = createSelector(
    getCartStatus,
    (status) => status === PromiseStatus.Success
);

export const getCartProducts = createSelector(
    getCart,
    (cart) => cart.contents?.nodes || []
);

export const getCartItemCount = createSelector(
    getCart,
    (cart) => cart.contents?.itemCount || 0
);

export const getCartTotalPrice = createSelector(getCart, (cart) => cart.total || '0');

export const getCartCoupons = createSelector(
    getCart,
    (cart) => cart?.appliedCoupons || []
);
