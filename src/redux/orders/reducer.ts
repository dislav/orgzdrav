import { OrderFragment } from '@graphql';
import { PromiseStatus } from '@redux/types';
import {
    ADD_ORDER,
    FETCH_ORDERS_FAILED,
    FETCH_ORDERS_REQUESTED,
    FETCH_ORDERS_SUCCEEDED,
    OrdersActionTypes,
    SET_ORDERS,
} from '@redux/orders/actions';

interface OrdersState {
    status: PromiseStatus;
    error: null | string;
    orders: OrderFragment[];
}

const initialState: OrdersState = {
    status: PromiseStatus.Idle,
    error: null,
    orders: [],
};

export const OrdersReducer = (
    state = initialState,
    action: OrdersActionTypes
): OrdersState => {
    switch (action.type) {
        case FETCH_ORDERS_REQUESTED:
            return { ...state, status: PromiseStatus.Loading };
        case FETCH_ORDERS_SUCCEEDED:
            return {
                ...state,
                orders: action.payload,
                status: PromiseStatus.Success,
            };
        case FETCH_ORDERS_FAILED:
            return {
                ...state,
                status: PromiseStatus.Failed,
                error: action.payload,
            };
        case SET_ORDERS:
            return { ...state, orders: action.payload };
        case ADD_ORDER:
            return { ...state, orders: [...state.orders, action.payload] };
        default:
            return state;
    }
};
