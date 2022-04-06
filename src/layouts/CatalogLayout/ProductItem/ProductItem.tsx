import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { SimpleProductFragment } from '@graphql';

import {
    Container,
    ImageWrapper,
    Content,
    Title,
    Price,
    Button,
} from './ProductItem.styled';

import { getCartProducts } from '@redux/cart/selectors';
import { useCart } from '@hooks/useCart';
import Image from '@components/Image/Image';

interface IProductItem extends SimpleProductFragment {
    className?: string;
}

const ProductItem: React.FC<IProductItem> = ({
    className,
    slug,
    databaseId,
    name,
    image,
    regularPrice,
    salePrice,
}) => {
    const cartProducts = useSelector(getCartProducts);

    const { onAddProductToCart, onRemoveProductFromCart, isLoading } =
        useCart();

    const productKey = useMemo(() => {
        if (cartProducts.length)
            return (
                cartProducts.find(
                    (product) =>
                        (product?.product?.node as SimpleProductFragment)
                            .databaseId === databaseId
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
            <Container className={className}>
                {image?.sourceUrl && (
                    <ImageWrapper>
                        <Image
                            src={image.sourceUrl}
                            alt={name || ''}
                            layout="fill"
                            objectFit="cover"
                        />
                    </ImageWrapper>
                )}
                <Content>
                    <Title>{name}</Title>
                    {regularPrice && (
                        <Price
                            regularPrice={regularPrice}
                            salePrice={salePrice}
                        />
                    )}
                    <Button onClick={onClickHandler} isLoading={isLoading}>
                        {!productKey ? 'В корзину' : 'Добавлено'}
                    </Button>
                </Content>
            </Container>
        </Link>
    );
};

export default ProductItem;
