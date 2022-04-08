import { CustomerFragment } from '@graphql';
import { PromiseStatus } from '@redux/types';
import {
    ADD_CUSTOMER_ORDER,
    CLEAR_CUSTOMER,
    CustomerActionTypes,
    FETCH_CUSTOMER_FAILED,
    FETCH_CUSTOMER_REQUESTED,
    FETCH_CUSTOMER_SUCCEEDED,
    SET_CUSTOMER,
} from '@redux/customer/actions';
import orders from '@pages/orders';

export interface CustomerState extends CustomerFragment {
    status: PromiseStatus;
    error: null | string;
    isLoggedIn: boolean;
}

const initialState: CustomerState = {
    status: PromiseStatus.Idle,
    error: null,
    isLoggedIn: false,
    id: '',
    databaseId: null,
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    billing: {
        firstName: null,
        lastName: null,
        phone: null,
        company: null,
        city: null,
    },
};

export const customerReducer = (
    state = initialState,
    action: CustomerActionTypes
): CustomerState => {
    switch (action.type) {
        case FETCH_CUSTOMER_REQUESTED:
            return { ...state, status: PromiseStatus.Loading };
        case FETCH_CUSTOMER_SUCCEEDED:
            return {
                ...state,
                ...action.payload,
                status: PromiseStatus.Success,
                isLoggedIn: true,
            };
        case FETCH_CUSTOMER_FAILED:
            return {
                ...state,
                status: PromiseStatus.Failed,
                error: action.payload,
            };
        case SET_CUSTOMER:
            return { ...state, ...action.payload };
        case ADD_CUSTOMER_ORDER:
            return {
                ...state,
                orders: {
                    nodes: [...(state.orders?.nodes || []), action.payload],
                },
            };
        case CLEAR_CUSTOMER:
            return state;
        default:
            return state;
    }
};
