import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import {
    GetProductsDocument,
    GetProductsQuery,
    GetProductsQueryVariables,
    OrderEnum,
    ProductsOrderByEnum,
    SimpleProductFragment,
} from '@graphql';

import { List } from '@layouts/ServicesLayout/ServicesLayout.styled';
import ServicesLayout from '@layouts/ServicesLayout/ServicesLayout';
import ProductCard from '@components/ProductCard/ProductCard';
import EmptyList from '@components/EmptyList/EmptyList';
import Heading from '@components/Heading/Heading';

const Services: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    products,
}) => {
    return (
        <ServicesLayout meta={{ title: 'Услуги' }}>
            <Heading
                title="Проект «OrgZdrav»"
                subtitle="Пройдите лицензирование и подготовьтесь к проверкам"
            />
            {products.length > 0 ? (
                <List>
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </List>
            ) : (
                <EmptyList>Список пуст</EmptyList>
            )}
        </ServicesLayout>
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
                categoryIn: ['uslugi', 'audity']
            },
            first: 100,
        },
    });

    return {
        props: {
            products: (products.products?.nodes ||
                []) as SimpleProductFragment[],
        },
        revalidate: 1,
    };
};

export default Services;
