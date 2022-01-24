import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import client from '@graphql/client';
import { GetProductsQuery, GetProductsQueryProps } from '@graphql/types';

import CatalogLayout from '@layouts/CatalogLayout/CatalogLayout';
import ProductList from '@layouts/CatalogLayout/ProductList/ProductList';
import SearchForm from '@components/SearchForm/SearchForm';
import { setProducts } from '@redux/products/actions';
import { useProductsQuery } from '@hooks/useProductsQuery';

const Catalog: React.FC = () => {
    const dispatch = useDispatch();

    const [fetchProducts] = useProductsQuery();

    const onSearch = useCallback(
        async (search: string) => {
            try {
                const { data } = await fetchProducts({
                    variables: {
                        where: {
                            search,
                            orderby: [
                                {
                                    field: 'MENU_ORDER',
                                    order: 'ASC',
                                },
                            ],
                            categoryNotIn: 'vebinary',
                        },
                        first: 100,
                    },
                });

                if (data?.products?.nodes)
                    dispatch(setProducts(data.products.nodes));
            } catch (e) {
                console.log(e);
            }
        },
        [dispatch, fetchProducts]
    );

    return (
        <CatalogLayout
            meta={{
                title: 'Продукты',
            }}
            hideFooter
        >
            <SearchForm onChange={onSearch} />
            <ProductList />
        </CatalogLayout>
    );
};

export const getStaticProps = async () => {
    const { data: products } = await client.query<
        GetProductsQueryProps,
        Partial<{
            where: {
                orderby?: { field: string; order?: 'ASC' | 'DESC' }[];
                category?: string;
                categoryNotIn?: string;
            };
            first: number;
        }>
    >({
        query: GetProductsQuery,
        fetchPolicy: 'no-cache',
        variables: {
            where: {
                orderby: [
                    {
                        field: 'MENU_ORDER',
                        order: 'ASC',
                    },
                ],
                categoryNotIn: 'vebinary',
            },
            first: 100,
        },
    });

    return {
        props: {
            initialReduxState: {
                products: products.products.nodes,
            },
        },
        revalidate: 1,
    };
};

export default Catalog;
