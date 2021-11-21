import React from 'react';

import { OrderProps } from '@graphql/fragments/order';

import { Container } from './OrderList.styled';
import OrderCard from '@components/OrderCard/OrderCard';

interface IOrderList {
    className?: string;
    orders: OrderProps[];
}

const OrderList: React.FC<IOrderList> = ({ className, orders }) => {
    return (
        <Container className={className}>
            {orders.map((order) => (
                <OrderCard key={order.id} {...order} />
            ))}
        </Container>
    );
};

export default OrderList;
