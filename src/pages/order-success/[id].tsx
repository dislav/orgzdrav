import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

import client from '@graphql/client';
import {
    GetOrderDocument,
    GetOrderQuery,
    GetOrderQueryVariables,
    GetPageDocument,
    GetPageQuery,
    GetPageQueryVariables,
} from '@graphql';

import OrdersLayout from '@layouts/OrdersLayout/OrdersLayout';
import ContactsCard from '@layouts/OrdersLayout/ContactsCard/ContactsCard';

const Order: React.FC<GetPageQuery> = ({ page }) => {
    const router = useRouter();

    return (
        <OrdersLayout
            meta={{
                title: `Успешный заказ #${router.query.id}`,
            }}
        >
            {page?.content && <ContactsCard content={page.content} />}
        </OrdersLayout>
    );
};

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { data: page } = await client.query<
        GetPageQuery,
        GetPageQueryVariables
    >({
        query: GetPageDocument,
        fetchPolicy: 'no-cache',
        variables: { id: 'order-success' },
    });

    try {
        await client.query<GetOrderQuery, GetOrderQueryVariables>({
            query: GetOrderDocument,
            fetchPolicy: 'no-cache',
            variables: { id: context.query?.id as string },
        });
    } catch (e) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            page: page.page,
        },
    };
};

export default Order;
