import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import {
    GetProductsDocument,
    GetProductsQuery,
    GetProductsQueryVariables,
    SimpleProductFragment,
} from '@graphql';

import WebinarLayout from '@layouts/WebinarLayout/WebinarLayout';
import WebinarList from '@components/WebinarList/WebinarList';
import EmptyList from '@components/EmptyList/EmptyList';
import Heading from '@components/Heading/Heading';

const Webinars: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    webinars,
}) => {
    return (
        <WebinarLayout meta={{ title: 'Вебинары' }}>
            <Heading
                title="Проект «OrgZdrav»"
                subtitle="Получите все знания о законодательстве онлайн"
            />
            {webinars.length ? (
                <WebinarList webinars={webinars} />
            ) : (
                <EmptyList>Список вебинаров пуст</EmptyList>
            )}
        </WebinarLayout>
    );
};

export const getStaticProps = async () => {
    const { data: webinars } = await client.query<
        GetProductsQuery,
        GetProductsQueryVariables
    >({
        query: GetProductsDocument,
        fetchPolicy: 'no-cache',
        variables: {
            first: 100,
            where: {
                category: 'vebinary',
            },
        },
    });

    return {
        props: {
            webinars: (webinars.products?.nodes ||
                []) as SimpleProductFragment[],
        },
        revalidate: 1,
    };
};

export default Webinars;
