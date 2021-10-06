import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';

import { SimpleProductProps } from '@graphql/types';
import {
    Container,
    ImageWrapper,
    Footer,
    FooterWrapper,
    Button,
    CartCounter,
    CartButton,
} from './CatalogLayout.styled';

import { CartIcon, DotsMenu } from '@icons/icons';
import {
    AddToCartMutation,
    AddToCartMutationOptionsProps,
    AddToCartMutationProps,
} from '@graphql/mutations/addToCart';

import { getCartItemCount } from '@redux/cart/selectors';
import { setCart } from '@redux/cart/actions';

interface ICatalogLayout {
    product?: SimpleProductProps;
    isProductPage?: boolean;
}

const CatalogLayout: React.FC<ICatalogLayout> = ({
    children,
    product,
    isProductPage,
}) => {
    const [init, setInit] = useState(false);

    const dispatch = useDispatch();
    const itemCount = useSelector(getCartItemCount);

    useEffect(() => {
        setInit(true);
    }, []);

    const [addToCart, { loading }] = useMutation<
        AddToCartMutationProps,
        AddToCartMutationOptionsProps
    >(AddToCartMutation);

    const addToCartHandler = async () => {
        if (product?.databaseId) {
            try {
                const { data } = await addToCart({
                    variables: { productId: product.databaseId },
                });

                if (data?.addToCart.cart) {
                    dispatch(setCart(data.addToCart.cart));
                }
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <Container>
            {isProductPage && product?.image && (
                <ImageWrapper>
                    <Image
                        src={product.image.sourceUrl}
                        alt={product.name}
                        layout="fill"
                    />
                </ImageWrapper>
            )}

            {children}

            <Footer>
                <FooterWrapper>
                    {isProductPage && (
                        <>
                            <Link href="/catalog" passHref>
                                <a>
                                    <DotsMenu />
                                </a>
                            </Link>

                            <Button
                                onClick={addToCartHandler}
                                isLoading={loading}
                            >
                                Добавить в корзину
                            </Button>
                        </>
                    )}

                    {init && (
                        <Link href="/cart">
                            <a>
                                {!isProductPage && <span>Корзина</span>}
                                <CartButton>
                                    {itemCount > 0 && (
                                        <CartCounter>{itemCount}</CartCounter>
                                    )}
                                    <CartIcon />
                                </CartButton>
                            </a>
                        </Link>
                    )}
                </FooterWrapper>
            </Footer>
        </Container>
    );
};

export default CatalogLayout;
