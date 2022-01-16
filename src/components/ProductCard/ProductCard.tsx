import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import { SimpleProductProps } from '@graphql/types';
import { Container, ImageWrapper, Button, Price } from './ProductCard.styled';

import { useCart } from '@hooks/useCart';
import { getCartProducts } from '@redux/cart/selectors';

const ProductCard: React.FC<SimpleProductProps> = ({
    slug,
    name,
    image,
    price,
    databaseId,
}) => {
    const cartProducts = useSelector(getCartProducts);

    const { onAddProductToCart, onRemoveProductFromCart, isLoading } =
        useCart();

    const productKey = useMemo(() => {
        if (cartProducts.length)
            return (
                cartProducts.find(
                    (product) => product.product.node.databaseId === databaseId
                )?.key || null
            );

        return null;
    }, [cartProducts, databaseId]);

    const onClickHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        if (!productKey) {
            onAddProductToCart(databaseId);
        } else {
            onRemoveProductFromCart(productKey);
        }
    };

    return (
        <Link href={`/catalog/${slug}`} passHref>
            <Container>
                {image?.sourceUrl && (
                    <ImageWrapper>
                        <Image src={image.sourceUrl} alt={name} layout="fill" />
                    </ImageWrapper>
                )}
                <h2>{name}</h2>

                {price && <Price dangerouslySetInnerHTML={{ __html: price }} />}

                <Button onClick={onClickHandler} isLoading={isLoading}>
                    {!productKey ? 'В корзину' : 'Убрать из корзины'}
                </Button>
            </Container>
        </Link>
    );
};

export default ProductCard;
