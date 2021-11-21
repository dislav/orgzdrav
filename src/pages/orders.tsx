import React from 'react';
import { useQuery } from '@apollo/client';

import { GetOrdersQuery, GetOrdersQueryProps } from '@graphql/queries/orders';

import OrdersLayout from '@layouts/OrdersLayout/OrdersLayout';
import OrderList from '@layouts/OrdersLayout/OrderList/OrderList';
import Spinner from '@components/Spinner/Spinner';

const Orders: React.FC = () => {
    const { data: orders, loading } =
        useQuery<GetOrdersQueryProps>(GetOrdersQuery);

    return (
        <OrdersLayout meta={{ title: 'Заказы' }} hideFooter>
            {loading && <Spinner />}
            {!loading && orders?.orders && (
                <OrderList orders={orders.orders.nodes} />
            )}
        </OrdersLayout>
    );
};

export default Orders;
