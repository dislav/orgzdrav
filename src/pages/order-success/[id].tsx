import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

import client from '@graphql/client';
import { GetPageQuery, GetPageQueryProps } from '@graphql/queries/page';
import { GetOrderQuery, GetOrderQueryProps } from '@graphql/queries/order';

import OrdersLayout from '@layouts/OrdersLayout/OrdersLayout';
import SocialsSection from '@layouts/HomeLayout/SocialsSection/SocialsSection';

import GradientLine from '@components/GradientLine/GradientLine';
import ContactsCard from '@layouts/OrdersLayout/ContactsCard/ContactsCard';
import ButtonLink from '@components/ButtonLink/ButtonLink';

const Order: React.FC<{ page: GetPageQueryProps['page'] }> = ({ page }) => {
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

            {page.content && <ContactsCard content={page.content} />}

            <GradientLine />

            <SocialsSection />
        </OrdersLayout>
    );
};

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { data: page } = await client.query<GetPageQueryProps>({
        query: GetPageQuery,
        fetchPolicy: 'no-cache',
        variables: { id: 'order-success' },
    });

    try {
        await client.query<GetOrderQueryProps>({
            query: GetOrderQuery,
            fetchPolicy: 'no-cache',
            variables: { id: context.query?.id || '' },
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
