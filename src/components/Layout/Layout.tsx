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
import { getIsCartLoaded } from '@redux/cart/selectors';
import { fetchCustomer } from '@redux/customer/actions';

export interface ILayout {
    className?: string;
    hideFooter?: boolean;
    showShopToolbar?: boolean;
    meta?: IMeta;
    product?: SimpleProductFragment;
}

const Layout: React.FC<ILayout> = ({
    className,
    children,
    hideFooter,
    showShopToolbar,
    meta,
    product,
}) => {
    const dispatch = useDispatch();

    const isCartLoaded = useSelector(getIsCartLoaded);

    useEffect(() => {
        if (!isCartLoaded) dispatch(fetchCart());

        if (getToken()) dispatch(fetchCustomer());
    }, [dispatch]);

    return (
        <>
            <Meta {...meta} />

            <Header />

            <Container className={className}>{children}</Container>

            {!hideFooter && <Footer />}

            {showShopToolbar && <ShopFooter product={product} />}
        </>
    );
};

export default Layout;
