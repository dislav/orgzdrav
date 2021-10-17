import React from 'react';

import OrdersLayout from '@layouts/OrdersLayout/OrdersLayout';
import Meta from '@components/Meta/Meta';
import OrderList from '@layouts/OrdersLayout/OrderList/OrderList';

const Orders: React.FC = () => {
    return (
        <OrdersLayout hideFooter>
            <Meta title="Заказы" />
            <OrderList />
        </OrdersLayout>
    );
};

export default Orders;
