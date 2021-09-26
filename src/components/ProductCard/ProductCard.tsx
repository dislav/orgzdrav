import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { SimpleProductProps } from '@graphql/types';
import { Container, ImageWrapper, Price } from './ProductCard.styled';

const ProductCard: React.FC<SimpleProductProps> = ({
    slug,
    name,
    image,
    price,
}) => {
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
            </Container>
        </Link>
    );
};

export default ProductCard;
