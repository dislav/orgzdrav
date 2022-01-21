import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import client from '@graphql/client';
import { RootQueryToProductTypeConnectionWhereArgs } from '@graphql/graphql';
import { GetProductsQuery, GetProductsQueryProps } from '@graphql/types';

import CatalogLayout from '@layouts/CatalogLayout/CatalogLayout';
import ProductList from '@layouts/CatalogLayout/ProductList/ProductList';
import SearchForm from '@components/SearchForm/SearchForm';
import { setProducts } from '@redux/products/actions';

const Catalog: React.FC = () => {
    const dispatch = useDispatch();

    const { refetch: fetchProducts } = useQuery<
        GetProductsQueryProps,
        { where: RootQueryToProductTypeConnectionWhereArgs }
    >(GetProductsQuery, {
        skip: true,
    });

    const onSearch = useCallback(
        async (search: string) => {
            try {
                const response = await fetchProducts({ where: { search } });

                console.log(response);

                if (response?.data?.products)
                    dispatch(setProducts(response.data.products.nodes));
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
            {/*<SearchForm onChange={onSearch} />*/}
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
                category: 'dokumenty',
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
