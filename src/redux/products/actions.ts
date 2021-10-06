import { createAction } from 'redux-actions';
import { SimpleProductProps } from '@graphql/fragments/simpleProduct';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = createAction<SimpleProductProps[]>(SET_PRODUCTS);
