import { SimpleProductProps } from '@graphql/fragments/simpleProduct';

export const SET_PRODUCTS = 'SET_PRODUCTS';

interface SetProductsAction {
    type: typeof SET_PRODUCTS;
    payload: SimpleProductProps[];
}

export type ProductsActionTypes = SetProductsAction;

export const setProducts = (
    payload: SimpleProductProps[]
): SetProductsAction => ({
    type: SET_PRODUCTS,
    payload,
});
