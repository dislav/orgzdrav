import { call, put, takeLatest } from 'redux-saga/effects';

import {
    FETCH_ORDERS_REQUESTED,
    fetchOrdersFailed,
    fetchOrdersSucceeded,
} from '@redux/orders/actions';
import client from '@graphql/client';
import { GetOrdersQuery, GetOrdersQueryProps } from '@graphql/queries/orders';
import { ApolloError, ApolloQueryResult } from '@apollo/client';

function* fetchOrders() {
    try {
        const { data }: ApolloQueryResult<GetOrdersQueryProps> = yield call(
            client.query,
            { query: GetOrdersQuery }
        );

        yield put(fetchOrdersSucceeded(data.orders.nodes));
    } catch (e) {
        const error = e as ApolloError;

        yield put(fetchOrdersFailed(error.message));
    }
}

export function* ordersSaga() {
    yield takeLatest(FETCH_ORDERS_REQUESTED, fetchOrders);
}
