import { RootReducer } from '@redux/rootReducer';
import { createSelector } from 'reselect';
import { SimpleProductFragment } from '@graphql';

export const getProducts = (state: RootReducer) => state.products;

export const getProductsByCategories = createSelector(
    getProducts,
    (products) => {
        const productsMap = new Map<string, SimpleProductFragment[]>();

        products.forEach((product) => {
            product.productCategories?.nodes?.forEach((category) => {
                if (category?.slug && productsMap.has(category.slug)) {
                    productsMap.set(category.slug, [
                        ...(productsMap.get(category.slug) || []),
                        product,
                    ]);
                } else if (category?.slug) {
                    productsMap.set(category.slug, [product]);
                }
            });
        });

        return Array.from(productsMap);
    }
);
