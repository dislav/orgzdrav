import { createSelector } from 'reselect';
import { RootReducer } from '@redux/rootReducer';
import { PromiseStatus } from '@redux/types';
import { OrderFragment } from "@graphql"

export const getCustomer = (state: RootReducer) => state.customer;

export const getIsLoggedIn = createSelector(
    getCustomer,
    (customer) => customer.isLoggedIn
);

export const getCustomerStatus = createSelector(
    getCustomer,
    (customer) => customer.status
);

export const getCustomerLoading = createSelector(
    getCustomerStatus,
    (status) => status === PromiseStatus.Loading
);

export const getCustomerDisplayName = createSelector(
    getCustomer,
    (customer) => {
        if (customer?.firstName || customer?.lastName) {
            return `${customer.firstName} ${customer.lastName}`;
        }

        return null;
    }
);

export const getCustomerShortName = createSelector(getCustomer, (customer) => {
    if (customer.firstName || customer.lastName) {
        return `${customer.firstName ? customer.firstName[0] : ''}${
            customer.lastName ? customer.lastName[0] : ''
        }`;
    }

    return customer?.username?.[0] || '';
});

export const getCustomerOrders = createSelector(
    getCustomer,
    (customer) => (customer.orders?.nodes || []) as OrderFragment[]
);
