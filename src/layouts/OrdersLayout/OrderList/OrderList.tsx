import React from 'react';
import { useQuery } from '@apollo/client';

import { GetOrdersQuery, GetOrdersQueryProps } from '@graphql/queries/orders';

import { Container } from './OrderList.styled';
import OrderCard from '@components/OrderCard/OrderCard';

const OrderList: React.FC = () => {
    const { data, loading } = useQuery<GetOrdersQueryProps>(GetOrdersQuery);

    if (loading) {
        return <div>Загрузка</div>;
    }

    console.log(data?.orders.nodes[0]);

    return (
        <Container>
            {data?.orders.nodes.map((order) => (
                <OrderCard key={order.id} {...order} />
            ))}
        </Container>
    );
};

export default OrderList;
