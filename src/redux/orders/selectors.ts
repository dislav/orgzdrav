import { createSelector } from 'reselect';

import { RootReducer } from '@redux/rootReducer';
import { PromiseStatus } from '@redux/types';

export const getOrdersState = (state: RootReducer) => state.orders;

export const getOrders = createSelector(
    getOrdersState,
    (state) => state.orders
);

export const getIsOrdersLoading = createSelector(
    getOrdersState,
    (state) => state.status === PromiseStatus.Loading
);

export const getIsOrdersLoaded = createSelector(
    getOrdersState,
    (state) => state.status === PromiseStatus.Success
);
