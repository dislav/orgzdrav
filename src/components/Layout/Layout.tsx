import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SimpleProductFragment } from '@graphql';

import { Container } from './Layout.styled';
import Header from '@components/Header/Header';
import Meta, { IMeta } from '@components/Meta/Meta';
import Footer from '@components/Footer/Footer';
import ShopFooter from '@components/ShopFooter/ShopFooter';

import { getToken } from '@graphql/utils';
import { fetchCart } from '@redux/cart/actions';
import { fetchProfile } from '@redux/profile/actions';
import { fetchOrders } from '@redux/orders/actions';
import { getIsCartLoaded } from '@redux/cart/selectors';
import { getIsOrdersLoaded } from '@redux/orders/selectors';
import { getIsProfileLoaded } from '@redux/profile/selectors';

export interface ILayout {
    className?: string;
    hideFooter?: boolean;
    hideShopFooter?: boolean;
    meta?: IMeta;
    product?: SimpleProductFragment;
}

const Layout: React.FC<ILayout> = ({
    className,
    children,
    hideFooter,
    hideShopFooter,
    meta,
    product,
}) => {
    const dispatch = useDispatch();

    const isCartLoaded = useSelector(getIsCartLoaded);
    const isProfileLoaded = useSelector(getIsProfileLoaded);
    const isOrdersLoaded = useSelector(getIsOrdersLoaded);

    useEffect(() => {
        if (!isCartLoaded) dispatch(fetchCart());

        if (getToken()) {
            if (!isProfileLoaded) dispatch(fetchProfile());
            if (!isOrdersLoaded) dispatch(fetchOrders());
        }
    }, [dispatch]);

    return (
        <>
            <Meta {...meta} />

            <Header />

            <Container className={className}>{children}</Container>

            {!hideFooter && <Footer />}

            {!hideShopFooter && <ShopFooter product={product} />}
        </>
    );
};

export default Layout;
