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
import CommonComponents from '@components/CommonComponents/CommonComponents';
import SectionOptions from '@layouts/CatalogLayout/SectionOptions/SectionOptions';

const Catalog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    product,
}) => {
    return (
        <CatalogLayout
            meta={{
                title: product.name,
                image: product.image?.sourceUrl,
            }}
            product={product}
            hideFooter
        >
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
                category: 'dokumenty',
            },
        },
    });

    const paths = products.products.nodes.map((product) => ({
        params: { slug: product.slug },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<{ slug: string }>) => {
    const { data: product } = await client.query<GetProductQueryProps>({
        query: GetProductQuery,
        fetchPolicy: 'no-cache',
        variables: {
            id: params?.slug,
        },
    });

    return {
        props: {
            product: product.product,
        },
        revalidate: 1,
    };
};

export default Catalog;
