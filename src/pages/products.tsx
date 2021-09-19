import React, { useMemo } from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import {
    GetProductsDocument,
    GetProductsQuery,
    Product,
} from '@graphql/graphql';
import Meta from "@components/Meta/Meta";

const Products: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    products,
}) => {
    const productsByTypes = useMemo(() => {
        const typesMap = new Map<string, Product[] | undefined>();

        products?.forEach((product) => {
            product?.productMain?.productType?.forEach((type) => {
                const slug = type?.slug;

                if (slug) {
                    if (typesMap.has(slug)) {
                        const products = typesMap.get(slug) || [];
                        typesMap.set(slug, [...products, product as Product])
                    } else {
                        typesMap.set(slug, [product as Product]);
                    }
                }
            });
        });

        return typesMap;
    }, [products]);

    console.log(Array.from(productsByTypes.entries()));

    return (
        <>
            <Meta title="Продукты" />
        </>
    );
};

export const getStaticProps = async () => {
    const { data } = await client.query<GetProductsQuery>({
        query: GetProductsDocument,
    });

    return {
        props: {
            products: data.products?.nodes,
        },
    };
};

export default Products;
