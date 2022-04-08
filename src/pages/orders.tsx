import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { getToken } from '@graphql/utils';

import OrdersLayout from '@layouts/OrdersLayout/OrdersLayout';
import OrderList from '@layouts/OrdersLayout/OrderList/OrderList';
import Spinner from '@components/Spinner/Spinner';

import { getCustomerLoading, getIsLoggedIn } from '@redux/customer/selectors';

const Orders: React.FC = () => {
    const router = useRouter();

    const isLoggedIn = useSelector(getIsLoggedIn);
    const isCustomerLoading = useSelector(getCustomerLoading);

    useEffect(() => {
        if (!getToken() && !isCustomerLoading && !isLoggedIn) router.push('/');
    }, [isLoggedIn, isCustomerLoading, router]);

    return (
        <OrdersLayout meta={{ title: 'Заказы' }} hideFooter>
            {isCustomerLoading && <Spinner />}
            {!isCustomerLoading && <OrderList />}
        </OrdersLayout>
    );
};

export default Orders;
