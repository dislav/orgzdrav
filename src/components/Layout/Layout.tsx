import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useMutation, useQuery } from '@apollo/client';

import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';
import { GetCartQuery, GetCartQueryProps } from '@graphql/queries/cart';
import {
    AddToCartMutation,
    AddToCartMutationOptionsProps,
    AddToCartMutationProps,
} from '@graphql/mutations/addToCart';
import {
    RemoveItemsFromCartMutation,
    RemoveItemsFromCartMutationProps,
    RemoveItemsFromCartMutationQueryProps,
} from '@graphql/mutations/removeItemsFromCart';
import { getToken } from '@graphql/utils';

import { Container, ImageWrapper } from './Layout.styled';
import Header from '@components/Header/Header';
import Meta, { IMeta } from '@components/Meta/Meta';
import Footer from '@components/Footer/Footer';
import ClientOnly from '@components/ClientOnly/ClientOnly';
import ShopFooter, { IShopFooter } from '@components/ShopFooter/ShopFooter';

export interface ILayout extends Partial<IShopFooter> {
    className?: string;
    hideFooter?: boolean;
    meta?: IMeta;
}

const Layout: React.FC<ILayout> = ({
    className,
    children,
    hideFooter,
    meta,
    ...props
}) => {
    const authToken = getToken();

    const [isLoading, setIsLoading] = useState(false);

    const { data: profile } = useQuery<GetViewerQueryProps>(GetViewerQuery, {
        skip: !authToken,
    });

    const { data: cart, refetch: updateCart } =
        useQuery<GetCartQueryProps>(GetCartQuery);

    const [addToCart] = useMutation<
        AddToCartMutationProps,
        AddToCartMutationOptionsProps
    >(AddToCartMutation);

    const [removeItemsFromCart] = useMutation<
        RemoveItemsFromCartMutationProps,
        RemoveItemsFromCartMutationQueryProps
    >(RemoveItemsFromCartMutation);

    const productKeyInCart = useMemo(() => {
        if (cart?.cart && props.product) {
            return (
                cart.cart.contents.nodes.find(
                    (product) => product.product.node.id === props.product?.id
                )?.key || ''
            );
        }

        return '';
    }, [cart, props.product]);

    const onAddToCartHandler = async () => {
        setIsLoading(true);

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
            } finally {
                setIsLoading(false);
            }
        }
    };

    const onRemoveProduct = async (key: string) => {
        setIsLoading(true);

        try {
            const { data } = await removeItemsFromCart({
                variables: { input: { keys: [key] } },
            });

            if (data?.removeItemsFromCart) {
                await updateCart();
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
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

            <Meta {...meta} />

            <ClientOnly>
                <Header profile={profile?.viewer} />
            </ClientOnly>

            <Container className={className}>{children}</Container>

            {!hideFooter && <Footer />}

            <ShopFooter
                itemCount={cart?.cart.contents.itemCount || 0}
                onAddToCart={onAddToCartHandler}
                onRemoveFromCart={() => onRemoveProduct(productKeyInCart)}
                isLoading={isLoading}
                hasItemInCart={!!productKeyInCart}
                {...props}
            />
        </>
    );
};

export default Layout;
