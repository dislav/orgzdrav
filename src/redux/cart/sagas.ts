import { takeLatest, call, put } from 'redux-saga/effects';
import { ApolloError, ApolloQueryResult } from '@apollo/client';

import client from '@graphql/client';
import { GetCartDocument, GetCartQuery } from '@graphql';

import {
    CART_FETCH_REQUESTED,
    fetchCartFailed,
    fetchCartSucceeded,
} from '@redux/cart/actions';

function* fetchCart() {
    try {
        const { data }: ApolloQueryResult<GetCartQuery> = yield call(
            client.query,
            {
                query: GetCartDocument,
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
