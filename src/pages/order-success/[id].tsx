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
import ButtonLink from '@components/ButtonLink/ButtonLink';

const Order: React.FC<GetPageQuery> = ({ page }) => {
    const router = useRouter();

    return (
        <OrdersLayout
            meta={{
                title: `Заказ #${router.query.id}`,
            }}
        >
            <h1>Спасибо за заказ!</h1>
            <p>
                Заказ #{router.query.id} успешно создан и ожидает вашей оплаты.
            </p>

            <ButtonLink href="/orders">Перейти к заказу</ButtonLink>

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
