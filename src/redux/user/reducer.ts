import { handleActions } from 'redux-actions';

import { SET_USER } from './actions';
import { ViewerProps } from '@graphql/fragments/viewer';

const initialState: ViewerProps = {
    id: '',
    userId: null,
    username: '',
    firstName: '',
    lastName: '',
    videos: {
        availableVideos: [],
    },
};

export const userReducer = handleActions(
    {
        [SET_USER]: (state, { payload }) => {
            return { ...state, ...payload };
        },
    },
    initialState
);
