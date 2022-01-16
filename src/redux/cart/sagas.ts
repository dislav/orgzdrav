import { takeLatest, call, put } from 'redux-saga/effects';
import { ApolloError, ApolloQueryResult } from '@apollo/client';

import client from '@graphql/client';
import {
    CART_FETCH_REQUESTED,
    fetchCartFailed,
    fetchCartSucceeded,
} from '@redux/cart/actions';
import { GetCartQuery, GetCartQueryProps } from '@graphql/queries/cart';

function* fetchCart() {
    try {
        const { data }: ApolloQueryResult<GetCartQueryProps> = yield call(
            client.query,
            {
                query: GetCartQuery,
            }
        );

        yield put(fetchCartSucceeded(data.cart));
    } catch (e) {
        const apolloError = e as ApolloError;

        yield put(fetchCartFailed(apolloError.message));
    }
}

export function* cartSaga() {
    yield takeLatest(CART_FETCH_REQUESTED, fetchCart);
}
