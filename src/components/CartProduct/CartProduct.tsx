import React from 'react';
import Image from 'next/image';

import { SimpleProductProps } from '@graphql/fragments/simpleProduct';

import {
    Container,
    ImageCover,
    Price,
    RightWrapper,
    Text
} from './CartProduct.styled';
import Counter from '@components/Counter/Counter';

interface ICartProduct extends SimpleProductProps {
    productKey: string;
    quantity: number;
    totalPrice: string;
    onUpdateQuantity?: (key: string, count: number) => void;
}

const CartProduct: React.FC<ICartProduct> = ({
    productKey,
    image,
    name,
    quantity,
    totalPrice,
    onUpdateQuantity,
}) => {
    return (
        <Container>
            {image && (
                <ImageCover>
                    <Image
                        src={image.sourceUrl}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                    />
                </ImageCover>
            )}
            <Text>{name}</Text>
            <RightWrapper>
                <Counter value={quantity} onChange={count => onUpdateQuantity?.(productKey, count)} />
                <Price dangerouslySetInnerHTML={{ __html: totalPrice }} />
            </RightWrapper>
        </Container>
    );
};

export default CartProduct;
