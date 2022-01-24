import { ProductsActionTypes, SET_PRODUCTS } from './actions';
import { SimpleProductProps } from '@graphql/fragments/simpleProduct';

const initialState: SimpleProductProps[] = [];

export const productsReducer = (
    state = initialState,
    action: ProductsActionTypes
): SimpleProductProps[] => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};
