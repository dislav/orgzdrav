import { ViewerProps } from '@graphql/fragments/viewer';

import { PromiseStatus } from '@redux/types';
import {
    CLEAR_PROFILE,
    FETCH_PROFILE_FAILED,
    FETCH_PROFILE_REQUESTED,
    FETCH_PROFILE_SUCCEEDED,
    ProfileActionTypes,
    SET_PROFILE,
} from '@redux/profile/actions';

export interface ProfileState extends ViewerProps {
    status: PromiseStatus;
    error: null | string;
    isLoggedIn: boolean;
}

const initialState: ProfileState = {
    status: PromiseStatus.Idle,
    error: null,
    id: '',
    userId: null,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    isLoggedIn: false,
};

export const profileReducer = (
    state = initialState,
    action: ProfileActionTypes
): ProfileState => {
    switch (action.type) {
        case FETCH_PROFILE_REQUESTED:
            return { ...state, status: PromiseStatus.Loading };
        case FETCH_PROFILE_SUCCEEDED:
            return {
                ...state,
                ...action.payload,
                status: PromiseStatus.Success,
                isLoggedIn: true
            };
        case FETCH_PROFILE_FAILED:
            return {
                ...state,
                status: PromiseStatus.Failed,
                error: action.payload,
            };
        case SET_PROFILE:
            return action.payload;
        case CLEAR_PROFILE:
            return state;
        default:
            return state;
    }
};
