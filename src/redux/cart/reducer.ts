import {
    CART_FETCH_REQUESTED,
    CART_FETCH_SUCCEEDED,
    CART_FETCH_FAILED,
    SET_CART,
    CartActionTypes,
} from './actions';
import { PromiseStatus } from '@redux/types';
import { CartProps } from '@graphql/fragments/cart';

export interface CartState extends CartProps {
    status: PromiseStatus;
    error: null | string;
}

const initialState: CartState = {
    status: PromiseStatus.Idle,
    error: null,
    isEmpty: true,
    total: '0',
    shippingTotal: '0',
    contentsTotal: '0',
    discountTotal: '0',
    appliedCoupons: [],
    contents: {
        itemCount: 0,
        productCount: 0,
        nodes: [],
    },
};

export const cartReducer = (
    state = initialState,
    action: CartActionTypes
): CartState => {
    switch (action.type) {
        case CART_FETCH_REQUESTED:
            return { ...state, status: PromiseStatus.Loading };
        case CART_FETCH_SUCCEEDED:
            return {
                ...state,
                ...action.payload,
                status: PromiseStatus.Success,
            };
        case CART_FETCH_FAILED:
            return {
                ...state,
                status: PromiseStatus.Failed,
                error: action.payload,
            };
        case SET_CART:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
