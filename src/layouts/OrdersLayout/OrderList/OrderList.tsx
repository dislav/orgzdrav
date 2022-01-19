import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './OrderList.styled';
import OrderCard from '@components/OrderCard/OrderCard';

import { getOrders } from '@redux/orders/selectors';

interface IOrderList {
    className?: string;
}

const OrderList: React.FC<IOrderList> = ({ className }) => {
    const orders = useSelector(getOrders);

    return (
        <Container className={className}>
            {orders.map((order) => (
                <OrderCard key={order.id} {...order} />
            ))}
        </Container>
    );
};

export default OrderList;
