import { SimpleProductFragment } from '@graphql';

export const SET_PRODUCTS = 'SET_PRODUCTS';

interface SetProductsAction {
    type: typeof SET_PRODUCTS;
    payload: SimpleProductFragment[];
}

export type ProductsActionTypes = SetProductsAction;

export const setProducts = (
    payload: SimpleProductFragment[]
): SetProductsAction => ({
    type: SET_PRODUCTS,
    payload,
});
