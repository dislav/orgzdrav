import React from 'react';
import { useSelector } from 'react-redux';

import OrdersLayout from '@layouts/OrdersLayout/OrdersLayout';
import OrderList from '@layouts/OrdersLayout/OrderList/OrderList';
import Spinner from '@components/Spinner/Spinner';

import { getIsOrdersLoading } from '@redux/orders/selectors';

const Orders: React.FC = () => {
    const isLoading = useSelector(getIsOrdersLoading);

    return (
        <OrdersLayout meta={{ title: 'Заказы' }} hideFooter>
            {isLoading && <Spinner />}
            {!isLoading && <OrderList />}
        </OrdersLayout>
    );
};

export default Orders;
