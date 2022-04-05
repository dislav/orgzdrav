import React from 'react';

import { SimpleProductFragment } from '@graphql';

import {
    Container,
    ImageCover,
    Price,
    RightWrapper,
    Text,
    Remove,
} from './CartProduct.styled';
import Image from '@components/Image/Image';

interface ICartProduct extends SimpleProductFragment {
    totalPrice?: string | null;
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
                {totalPrice && <Price regularPrice={totalPrice} />}
                <Remove onClick={onRemoveProduct} />
            </RightWrapper>
        </Container>
    );
};

export default CartProduct;
