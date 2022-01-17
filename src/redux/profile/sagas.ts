import { takeLatest, call, put } from 'redux-saga/effects';
import { ApolloError, ApolloQueryResult } from '@apollo/client';

import client from '@graphql/client';
import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';
import {
    FETCH_PROFILE_REQUESTED,
    fetchProfileFailed,
    fetchProfileSucceeded,
} from '@redux/profile/actions';

function* fetchProfile() {
    try {
        const { data }: ApolloQueryResult<GetViewerQueryProps> = yield call(
            client.query,
            {
                query: GetViewerQuery,
            }
        );

        yield put(fetchProfileSucceeded(data.viewer));
    } catch (e) {
        const apolloError = e as ApolloError;

        yield put(fetchProfileFailed(apolloError.message));
    }
}

export function* profileSaga() {
    yield takeLatest(FETCH_PROFILE_REQUESTED, fetchProfile);
}
