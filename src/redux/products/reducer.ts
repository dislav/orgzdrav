import { SimpleProductFragment } from '@graphql';
import { ProductsActionTypes, SET_PRODUCTS } from './actions';

const initialState: SimpleProductFragment[] = [];

export const productsReducer = (
    state = initialState,
    action: ProductsActionTypes
): SimpleProductFragment[] => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};
