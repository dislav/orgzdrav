import { CartFragment } from '@graphql';

export const CART_FETCH_REQUESTED = 'CART_FETCH_REQUESTED';
export const CART_FETCH_SUCCEEDED = 'CART_FETCH_SUCCEEDED';
export const CART_FETCH_FAILED = 'CART_FETCH_FAILED';

export const SET_CART = 'SET_CART';

interface FetchCartAction {
    type: typeof CART_FETCH_REQUESTED;
}

interface FetchCartSucceededAction {
    type: typeof CART_FETCH_SUCCEEDED;
    payload: CartFragment;
}

interface FetchCartFailedAction {
    type: typeof CART_FETCH_FAILED;
    payload: string;
}

interface SetCartAction {
    type: typeof SET_CART;
    payload: CartFragment;
}

export type CartActionTypes =
    | FetchCartAction
    | FetchCartSucceededAction
    | FetchCartFailedAction
    | SetCartAction;

export const fetchCart = (): CartActionTypes => ({
    type: CART_FETCH_REQUESTED,
});

export const fetchCartSucceeded = (payload: CartFragment): CartActionTypes => ({
    type: CART_FETCH_SUCCEEDED,
    payload,
});

export const fetchCartFailed = (payload: string): CartActionTypes => ({
    type: CART_FETCH_FAILED,
    payload,
});

export const setCart = (payload: CartFragment): CartActionTypes => ({
    type: SET_CART,
    payload,
});
