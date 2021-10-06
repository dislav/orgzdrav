import { handleActions } from 'redux-actions';

import { CLEAR_CART, SET_CART } from './actions';
import { GetCartQueryProps } from '@graphql/queries/cart';

const initialState: GetCartQueryProps['cart'] = {
    isEmpty: true,
    total: '',
    shippingTotal: '',
    contentsTotal: '',
    discountTotal: '',
    contents: {
        itemCount: 0,
        productCount: 0,
        nodes: [],
    },
};

export const cartReducer = handleActions(
    {
        [SET_CART]: (state, { payload }) => {
            return { ...state, ...payload };
        },
        [CLEAR_CART]: () => {
            return initialState;
        },
    },
    initialState
);
