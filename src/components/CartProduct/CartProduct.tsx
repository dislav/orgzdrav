import React from 'react';
import Image from 'next/image';

import { SimpleProductFragment } from '@graphql';

import {
    Container,
    ImageCover,
    Price,
    RightWrapper,
    Text,
    Remove,
} from './CartProduct.styled';

interface ICartProduct extends SimpleProductFragment {
    totalPrice?: string | null;
    onRemoveProduct?: React.DispatchWithoutAction;
}

const CartProduct: React.FC<ICartProduct> = ({
    image,
    name,
    regularPrice,
    totalPrice,
    onRemoveProduct,
}) => {
    return (
        <Container>
            {image?.sourceUrl && (
                <ImageCover>
                    <Image
                        src={image.sourceUrl}
                        alt={name || ''}
                        layout="fill"
                        objectFit="cover"
                    />
                </ImageCover>
            )}
            <Text>{name}</Text>
            <RightWrapper>
                {regularPrice && (
                    <Price
                        regularPrice={regularPrice}
                        salePrice={
                            regularPrice !== totalPrice ? totalPrice : null
                        }
                    />
                )}
                <Remove onClick={onRemoveProduct} />
            </RightWrapper>
        </Container>
    );
};

export default CartProduct;
