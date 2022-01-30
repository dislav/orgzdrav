import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import { Container } from './OrderList.styled';
import OrderCard from '@components/OrderCard/OrderCard';

import { getOrders } from '@redux/orders/selectors';
import EmptyList from '@components/EmptyList/EmptyList';

interface IOrderList {
    className?: string;
}

const OrderList: React.FC<IOrderList> = ({ className }) => {
    const orders = useSelector(getOrders);

    const sortedOrders = useMemo(() => {
        return [...orders]
            .filter((order) => order.billing && order.date)
            .sort((orderA, orderB) => {
                const orderADate = dayjs(orderA.date);
                const orderBDate = dayjs(orderB.date);

                if (orderADate.isBefore(orderBDate)) return 1;

                if (orderADate.isAfter(orderBDate)) return -1;

                return 0;
            });
    }, [orders]);

    return (
        <Container className={className}>
            {sortedOrders.length <= 0 ? (
                <EmptyList>Список заказов пуст</EmptyList>
            ) : (
                sortedOrders.map((order) => (
                    <OrderCard key={order.id} {...order} />
                ))
            )}
        </Container>
    );
};

export default OrderList;
