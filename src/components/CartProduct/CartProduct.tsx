import React from 'react';
import Image from 'next/image';

import { SimpleProductProps } from '@graphql/fragments/simpleProduct';

import {
    Container,
    ImageCover,
    Price,
    RightWrapper,
    Text,
    Remove,
} from './CartProduct.styled';

interface ICartProduct extends SimpleProductProps {
    quantity: number;
    totalPrice: string;
    onRemoveProduct?: React.DispatchWithoutAction;
}

const CartProduct: React.FC<ICartProduct> = ({
    image,
    name,
    totalPrice,
    onRemoveProduct,
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
                <Price dangerouslySetInnerHTML={{ __html: totalPrice }} />
                <Remove onClick={onRemoveProduct} />
            </RightWrapper>
        </Container>
    );
};

export default CartProduct;
