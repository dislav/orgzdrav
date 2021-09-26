import React, { useMemo } from 'react';
import { InferGetStaticPropsType } from 'next';

import { NextPageWithLayout } from '@pages/_app';
import client from '@graphql/client';
import {
    GetProductCategoriesQuery,
    GetProductCategoriesQueryProps,
} from '@graphql/types';

import Meta from '@components/Meta/Meta';
import CatalogLayout from '@layouts/CatalogLayout/CatalogLayout';
import FilterForm from '@layouts/CatalogLayout/FilterForm/FilterForm';
import ProductList from '@layouts/CatalogLayout/ProductList/ProductList';
import Layout from '@components/Layout/Layout';

const Catalog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    productsCategories,
}) => {
    const products = useMemo(() => {
        return productsCategories
            .map((category) => category.products.nodes)
            .flat();
    }, [productsCategories]);

    return (
        <CatalogLayout>
            <Meta title="Продукты" />
            <FilterForm />
            <ProductList products={products} />
        </CatalogLayout>
    );
};

(Catalog as NextPageWithLayout).getLayout = (page: React.ReactElement) => {
    return <Layout>{page}</Layout>;
};

export const getStaticProps = async () => {
    const { data: products } =
        await client.query<GetProductCategoriesQueryProps>({
            query: GetProductCategoriesQuery,
        });

    return {
        props: {
            productsCategories: products.productCategories.nodes,
        },
    };
};

export default Catalog;
