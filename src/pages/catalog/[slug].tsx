import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import {
    GetProductQuery,
    GetProductQueryProps,
    GetProductsQuery,
    GetProductsQueryProps,
} from '@graphql/types';

import CatalogLayout from '@layouts/CatalogLayout/CatalogLayout';
import Meta from '@components/Meta/Meta';
import CommonComponents from '@components/CommonComponents/CommonComponents';
import SectionOptions from '@layouts/CatalogLayout/SectionOptions/SectionOptions';

const Catalog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    product,
}) => {
    return (
        <CatalogLayout product={product} hideFooter showCatalogButton>
            <Meta title={product.name} />
            <h2>{product.name}</h2>

            <CommonComponents components={product.productAdditional.content} />

            {product.productAdditional.hasAdditionalOptions &&
                product.productAdditional.options && (
                    <SectionOptions
                        options={product.productAdditional.options}
                    />
                )}
        </CatalogLayout>
    );
};

export const getStaticPaths = async () => {
    const { data: products } = await client.query<GetProductsQueryProps>({
        query: GetProductsQuery,
    });

    const paths = products.products.nodes.map((product) => ({
        params: { slug: product.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<{ slug: string }>) => {
    const { data: product } = await client.query<GetProductQueryProps>({
        query: GetProductQuery,
        variables: {
            id: params?.slug,
        },
    });

    return {
        props: {
            product: product.product,
        },
        revalidate: 3600,
    };
};

export default Catalog;
