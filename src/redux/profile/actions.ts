import { ViewerFragment } from '@graphql';

export const FETCH_PROFILE_REQUESTED = 'FETCH_PROFILE_REQUESTED';
export const FETCH_PROFILE_SUCCEEDED = 'FETCH_PROFILE_SUCCEEDED';
export const FETCH_PROFILE_FAILED = 'FETCH_PROFILE_FAILED';

export const SET_PROFILE = 'SET_PROFILE';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';

interface FetchProfileRequestedAction {
    type: typeof FETCH_PROFILE_REQUESTED;
}

interface FetchProfileSucceededAction {
    type: typeof FETCH_PROFILE_SUCCEEDED;
    payload: ViewerFragment;
}

interface FetchProfileFailedAction {
    type: typeof FETCH_PROFILE_FAILED;
    payload: string;
}

interface SetProfileAction {
    type: typeof SET_PROFILE;
    payload: ViewerFragment;
}

interface ClearProfileAction {
    type: typeof CLEAR_PROFILE;
}

export type ProfileActionTypes =
    | FetchProfileRequestedAction
    | FetchProfileSucceededAction
    | FetchProfileFailedAction
    | SetProfileAction
    | ClearProfileAction;

export const fetchProfile = (): FetchProfileRequestedAction => ({
    type: FETCH_PROFILE_REQUESTED,
});

export const fetchProfileSucceeded = (
    payload: ViewerFragment
): FetchProfileSucceededAction => ({
    type: FETCH_PROFILE_SUCCEEDED,
    payload,
});

export const fetchProfileFailed = (
    payload: string
): FetchProfileFailedAction => ({
    type: FETCH_PROFILE_FAILED,
    payload,
});

export const setProfile = (payload: ViewerFragment): SetProfileAction => ({
    type: SET_PROFILE,
    payload,
});

export const clearProfile = (): ClearProfileAction => ({
    type: CLEAR_PROFILE,
});
