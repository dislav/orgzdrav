import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import {
    GetProductDocument,
    GetProductQuery,
    GetProductsDocument,
    GetProductsQuery,
    GetProductsQueryVariables,
    SimpleProductFragment,
} from '@graphql';

import CatalogLayout from '@layouts/CatalogLayout/CatalogLayout';
import CommonComponents from '@components/CommonComponents/CommonComponents';

const Catalog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    product,
}) => {
    return (
        <CatalogLayout
            meta={{
                title: product.name || '',
                image: product.image?.sourceUrl,
            }}
            product={product}
            hideFooter
        >
            {product.productAdditional?.content && (
                <CommonComponents
                    components={product.productAdditional.content}
                />
            )}
        </CatalogLayout>
    );
};

export const getStaticPaths = async () => {
    const { data: products } = await client.query<
        GetProductsQuery,
        GetProductsQueryVariables
    >({
        query: GetProductsDocument,
        fetchPolicy: 'no-cache',
        variables: {
            where: {
                category: 'dokumenty',
            },
        },
    });

    const paths =
        products.products?.nodes?.map((product) => ({
            params: { slug: (product as SimpleProductFragment)?.slug },
        })) || [];

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<{ slug: string }>) => {
    const { data: product } = await client.query<GetProductQuery>({
        query: GetProductDocument,
        fetchPolicy: 'no-cache',
        variables: {
            id: params?.slug,
        },
    });

    return {
        props: {
            product: product.product as SimpleProductFragment,
        },
        revalidate: 1,
    };
};

export default Catalog;
