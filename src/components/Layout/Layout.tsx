import React from 'react';
import Image from 'next/image';
import { useMutation, useQuery } from '@apollo/client';

import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';
import { GetCartQuery, GetCartQueryProps } from '@graphql/queries/cart';
import {
    AddToCartMutation,
    AddToCartMutationOptionsProps,
    AddToCartMutationProps,
} from '@graphql/mutations/addToCart';
import { getToken } from '@graphql/utils';

import { Container, ImageWrapper } from './Layout.styled';
import Header from '@components/Header/Header';
import Meta from '@components/Meta/Meta';
import Footer from '@components/Footer/Footer';
import ClientOnly from '@components/ClientOnly/ClientOnly';
import ShopFooter, { IShopFooter } from '@components/ShopFooter/ShopFooter';

export interface ILayout extends Partial<IShopFooter> {
    className?: string;
    hideFooter?: boolean;
}

const Layout: React.FC<ILayout> = ({
    className,
    children,
    hideFooter,
    ...props
}) => {
    const authToken = getToken();

    const { data: profile } = useQuery<GetViewerQueryProps>(GetViewerQuery, {
        skip: !authToken,
    });

    const { data: cart, refetch: updateCart } =
        useQuery<GetCartQueryProps>(GetCartQuery);

    const [addToCart, { loading }] = useMutation<
        AddToCartMutationProps,
        AddToCartMutationOptionsProps
    >(AddToCartMutation);

    const onAddToCartHandler = async () => {
        if (props.product?.databaseId) {
            try {
                const { data } = await addToCart({
                    variables: { productId: props.product.databaseId },
                });

                if (data?.addToCart.cart) {
                    await updateCart();
                }
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <>
            <ImageWrapper>
                <Image
                    src="/images/bg.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </ImageWrapper>

            <Meta />

            <ClientOnly>
                <Header profile={profile?.viewer} />
            </ClientOnly>

            <Container className={className}>{children}</Container>

            {!hideFooter && <Footer />}

            <ShopFooter
                itemCount={cart?.cart.contents.itemCount || 0}
                onAddToCart={onAddToCartHandler}
                isLoading={loading}
                {...props}
            />
        </>
    );
};

export default Layout;
