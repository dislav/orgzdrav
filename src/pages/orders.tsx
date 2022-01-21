import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import OrdersLayout from '@layouts/OrdersLayout/OrdersLayout';
import OrderList from '@layouts/OrdersLayout/OrderList/OrderList';
import Spinner from '@components/Spinner/Spinner';

import { getIsOrdersLoading } from '@redux/orders/selectors';
import { getIsLoggedIn, getIsProfileLoading } from '@redux/profile/selectors';
import { useRouter } from 'next/router';
import { getToken } from '@graphql/utils';

const Orders: React.FC = () => {
    const router = useRouter();

    const isLoggedIn = useSelector(getIsLoggedIn);
    const isProfileLoading = useSelector(getIsProfileLoading);
    const isOrdersLoading = useSelector(getIsOrdersLoading);

    useEffect(() => {
        if (!getToken() && !isProfileLoading && !isLoggedIn) router.push('/');
    }, [isLoggedIn, isProfileLoading, router]);

    return (
        <OrdersLayout meta={{ title: 'Заказы' }} hideFooter>
            {isOrdersLoading && <Spinner />}
            {!isOrdersLoading && <OrderList />}
        </OrdersLayout>
    );
};

export default Orders;
