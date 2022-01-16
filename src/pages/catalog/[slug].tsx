import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { Skeleton } from '@mui/material';

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
import Spinner from '@components/Spinner/Spinner';

const Catalog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    product,
}) => {
    const { isFallback } = useRouter();

    return (
        <CatalogLayout
            meta={{
                title: isFallback ? 'Загрузка' : product.name,
            }}
            isFallback={isFallback}
            product={product}
            hideShopFooter={isFallback}
            hideFooter
        >
            <h2>{isFallback ? <Skeleton /> : product.name}</h2>

            {isFallback ? (
                <Spinner />
            ) : (
                <CommonComponents
                    components={product.productAdditional.content}
                />
            )}

            {!isFallback &&
                product.productAdditional.hasAdditionalOptions &&
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
        fallback: true,
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
        revalidate: 1,
    };
};

export default Catalog;
