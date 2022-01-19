import { OrderProps } from '@graphql/fragments/order';

export const FETCH_ORDERS_REQUESTED = 'FETCH_ORDERS_REQUESTED';
export const FETCH_ORDERS_SUCCEEDED = 'FETCH_ORDERS_SUCCEEDED';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';

export const SET_ORDERS = 'SET_ORDERS';
export const ADD_ORDER = 'ADD_ORDER';

interface FetchOrdersRequestedAction {
    type: typeof FETCH_ORDERS_REQUESTED;
}

interface FetchOrdersSucceededAction {
    type: typeof FETCH_ORDERS_SUCCEEDED;
    payload: OrderProps[];
}

interface FetchOrdersFailedAction {
    type: typeof FETCH_ORDERS_FAILED;
    payload: string;
}

interface SetOrdersAction {
    type: typeof SET_ORDERS;
    payload: OrderProps[];
}

interface AddOrderAction {
    type: typeof ADD_ORDER;
    payload: OrderProps;
}

export type OrdersActionTypes =
    | FetchOrdersRequestedAction
    | FetchOrdersSucceededAction
    | FetchOrdersFailedAction
    | SetOrdersAction
    | AddOrderAction;

export const fetchOrders = (): FetchOrdersRequestedAction => ({
    type: FETCH_ORDERS_REQUESTED,
});

export const fetchOrdersSucceeded = (
    payload: OrderProps[]
): FetchOrdersSucceededAction => ({
    type: FETCH_ORDERS_SUCCEEDED,
    payload,
});

export const fetchOrdersFailed = (
    payload: string
): FetchOrdersFailedAction => ({
    type: FETCH_ORDERS_FAILED,
    payload,
});

export const setOrders = (payload: OrderProps[]): SetOrdersAction => ({
    type: SET_ORDERS,
    payload,
});

export const addOrder = (payload: OrderProps): AddOrderAction => ({
    type: ADD_ORDER,
    payload,
});
