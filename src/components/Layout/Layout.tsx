import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';
import { getToken } from '@graphql/utils';

import { Container } from './Layout.styled';
import Header from '@components/Header/Header';
import Meta, { IMeta } from '@components/Meta/Meta';
import Footer from '@components/Footer/Footer';
import ShopFooter, { IShopFooter } from '@components/ShopFooter/ShopFooter';
import { fetchCart } from '@redux/cart/actions';

export interface ILayout extends Partial<IShopFooter> {
    className?: string;
    hideFooter?: boolean;
    hideShopFooter?: boolean;
    meta?: IMeta;
}

const Layout: React.FC<ILayout> = ({
    className,
    children,
    hideFooter,
    hideShopFooter,
    meta,
    ...props
}) => {
    const authToken = getToken();
    const dispatch = useDispatch();

    const { data: profile } = useQuery<GetViewerQueryProps>(GetViewerQuery, {
        skip: !authToken,
    });

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    return (
        <>
            <Meta {...meta} />

            <Header profile={profile?.viewer} />

            <Container className={className}>{children}</Container>

            {!hideFooter && <Footer />}

            {!hideShopFooter && <ShopFooter product={props.product} />}
        </>
    );
};

export default Layout;
