import { createSelector } from 'reselect';

import { RootReducer } from '@redux/rootReducer';
import { PromiseStatus } from '@redux/types';

export const getOrdersState = (state: RootReducer) => state.orders;

export const getOrders = createSelector(
    getOrdersState,
    (state) => state.orders
);

export const getIsOrdersLoading = createSelector(getOrdersState, (state) =>
    [PromiseStatus.Idle, PromiseStatus.Loading].includes(state.status)
);
