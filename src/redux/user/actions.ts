import { createAction } from 'redux-actions';
import { ViewerProps } from '@graphql/fragments/viewer';

export const SET_USER = 'SET_USER';

export const setUser = createAction<ViewerProps>(SET_USER);
