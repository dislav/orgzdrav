import { call, put, takeLatest } from 'redux-saga/effects';
import { ApolloError, ApolloQueryResult } from '@apollo/client';

import client from '@graphql/client';
import { GetOrdersDocument, GetOrdersQuery, OrderFragment } from '@graphql';

import {
    FETCH_ORDERS_REQUESTED,
    fetchOrdersFailed,
    fetchOrdersSucceeded,
} from '@redux/orders/actions';

function* fetchOrders() {
    try {
        const { data }: ApolloQueryResult<GetOrdersQuery> = yield call(
            client.query,
            { query: GetOrdersDocument }
        );

        yield put(
            fetchOrdersSucceeded((data.orders?.nodes || []) as OrderFragment[])
        );
    } catch (e) {
        const error = e as ApolloError;

        yield put(fetchOrdersFailed(error.message));
    }
}

export function* ordersSaga() {
    yield takeLatest(FETCH_ORDERS_REQUESTED, fetchOrders);
}
