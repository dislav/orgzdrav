import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import client from '@graphql/client';
import {
    GetProductsDocument,
    GetProductsQuery,
    GetProductsQueryVariables,
    OrderEnum,
    ProductsOrderByEnum,
    useGetProductsLazyQuery,
} from '@graphql';

import CatalogLayout from '@layouts/CatalogLayout/CatalogLayout';
import ProductList from '@components/ProductList/ProductList';
import SearchForm from '@components/SearchForm/SearchForm';

import { setProducts } from '@redux/products/actions';
import { getProducts } from '@redux/products/selectors';

const Catalog: React.FC = () => {
    const dispatch = useDispatch();

    const products = useSelector(getProducts);

    const [fetchProducts] = useGetProductsLazyQuery();

    const onSearch = useCallback(
        async (search: string) => {
            try {
                const { data } = await fetchProducts({
                    variables: {
                        where: {
                            search,
                            orderby: [
                                {
                                    field: ProductsOrderByEnum.MenuOrder,
                                    order: OrderEnum.Asc,
                                },
                            ],
                            categoryNotIn: ['vebinary'],
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
            <ProductList products={products} />
        </CatalogLayout>
    );
};

export const getStaticProps = async () => {
    const { data: products } = await client.query<
        GetProductsQuery,
        GetProductsQueryVariables
    >({
        query: GetProductsDocument,
        fetchPolicy: 'no-cache',
        variables: {
            where: {
                orderby: [
                    {
                        field: ProductsOrderByEnum.MenuOrder,
                        order: OrderEnum.Asc,
                    },
                ],
                categoryNotIn: ['vebinary'],
            },
            first: 100,
        },
    });

    return {
        props: {
            initialReduxState: {
                products: products.products?.nodes || [],
            },
        },
        revalidate: 1,
    };
};

export default Catalog;
