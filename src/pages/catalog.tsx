import React from 'react';

import client from '@graphql/client';
import { GetProductsQuery, GetProductsQueryProps } from '@graphql/types';

import Meta from '@components/Meta/Meta';
import CatalogLayout from '@layouts/CatalogLayout/CatalogLayout';
import FilterForm from '@layouts/CatalogLayout/FilterForm/FilterForm';
import ProductList from '@layouts/CatalogLayout/ProductList/ProductList';

const Catalog: React.FC = () => {
    return (
        <CatalogLayout hideFooter>
            <Meta title="Продукты" />
            <FilterForm />
            <ProductList />
        </CatalogLayout>
    );
};

export const getStaticProps = async () => {
    const { data: products } = await client.query<GetProductsQueryProps>({
        query: GetProductsQuery,
    });

    return {
        props: {
            initialReduxState: {
                products: products.products.nodes,
            },
        },
    };
};

export default Catalog;
