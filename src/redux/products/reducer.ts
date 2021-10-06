import { handleActions } from 'redux-actions';

import { SET_PRODUCTS } from './actions';
import { SimpleProductProps } from '@graphql/fragments/simpleProduct';

const initialState: SimpleProductProps[] = [];

export const productsReducer = handleActions(
    {
        [SET_PRODUCTS]: (state, { payload }) => {
            return payload;
        },
    },
    initialState
);
