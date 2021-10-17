import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { GetOrderQuery, GetOrderQueryProps } from '@graphql/queries/order';

import OrdersLayout from '@layouts/OrdersLayout/OrdersLayout';
import Meta from '@components/Meta/Meta';

const Order: React.FC = () => {
    const router = useRouter();

    const { data, loading } = useQuery<GetOrderQueryProps>(GetOrderQuery, {
        variables: { id: router.query?.id },
        skip: !router.query?.id,
    });

    console.log(data);

    return (
        <OrdersLayout hideFooter>
            {loading && (
                <>
                    <Meta title="Загрузка заказа" />
                    <div>Загрузка</div>
                </>
            )}

            {!loading && data?.order && (
                <>
                    <Meta title={`Заказ #${data.order.databaseId}`} />
                </>
            )}
        </OrdersLayout>
    );
};

export default Order;
