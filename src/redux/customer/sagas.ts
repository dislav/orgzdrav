import { takeLatest, call, put } from 'redux-saga/effects';
import { ApolloError, ApolloQueryResult } from '@apollo/client';

import client from '@graphql/client';
import {
    CustomerFragment,
    GetCustomerDocument,
    GetCustomerQuery,
} from '@graphql';

import {
    FETCH_CUSTOMER_REQUESTED,
    fetchCustomerFailed,
    fetchCustomerSucceeded,
} from '@redux/customer/actions';

function* fetchCustomer() {
    try {
        const { data }: ApolloQueryResult<GetCustomerQuery> = yield call(
            client.query,
            {
                query: GetCustomerDocument,
            }
        );

        yield put(fetchCustomerSucceeded(data.customer as CustomerFragment));
    } catch (e) {
        const apolloError = e as ApolloError;

        yield put(fetchCustomerFailed(apolloError.message));
    }
}

export function* customerSaga() {
    yield takeLatest(FETCH_CUSTOMER_REQUESTED, fetchCustomer);
}
