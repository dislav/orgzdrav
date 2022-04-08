import { CustomerFragment, OrderFragment } from '@graphql';

export const FETCH_CUSTOMER_REQUESTED = 'FETCH_CUSTOMER_REQUESTED';
export const FETCH_CUSTOMER_SUCCEEDED = 'FETCH_CUSTOMER_SUCCEEDED';
export const FETCH_CUSTOMER_FAILED = 'FETCH_CUSTOMER_FAILED';

export const SET_CUSTOMER = 'SET_CUSTOMER';
export const CLEAR_CUSTOMER = 'CLEAR_CUSTOMER';
export const ADD_CUSTOMER_ORDER = 'ADD_CUSTOMER_ORDER';

interface FetchCustomerRequestedAction {
    type: typeof FETCH_CUSTOMER_REQUESTED;
}

interface FetchCustomerSucceededAction {
    type: typeof FETCH_CUSTOMER_SUCCEEDED;
    payload: CustomerFragment;
}

interface FetchCustomerFailedAction {
    type: typeof FETCH_CUSTOMER_FAILED;
    payload: string;
}

interface SetCustomerAction {
    type: typeof SET_CUSTOMER;
    payload: CustomerFragment;
}

interface ClearCustomerAction {
    type: typeof CLEAR_CUSTOMER;
}

interface AddCustomerOrderAction {
    type: typeof ADD_CUSTOMER_ORDER;
    payload: OrderFragment;
}

export type CustomerActionTypes =
    | FetchCustomerRequestedAction
    | FetchCustomerSucceededAction
    | FetchCustomerFailedAction
    | SetCustomerAction
    | ClearCustomerAction
    | AddCustomerOrderAction;

export const fetchCustomer = (): FetchCustomerRequestedAction => ({
    type: FETCH_CUSTOMER_REQUESTED,
});

export const fetchCustomerSucceeded = (
    payload: CustomerFragment
): FetchCustomerSucceededAction => ({
    type: FETCH_CUSTOMER_SUCCEEDED,
    payload,
});

export const fetchCustomerFailed = (
    payload: string
): FetchCustomerFailedAction => ({
    type: FETCH_CUSTOMER_FAILED,
    payload,
});

export const setCustomer = (payload: CustomerFragment): SetCustomerAction => ({
    type: SET_CUSTOMER,
    payload,
});

export const clearCustomer = (): ClearCustomerAction => ({
    type: CLEAR_CUSTOMER,
});

export const addCustomerOrder = (
    payload: OrderFragment
): AddCustomerOrderAction => ({
    type: ADD_CUSTOMER_ORDER,
    payload,
});
