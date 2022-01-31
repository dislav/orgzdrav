import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { SimpleProductFragment } from '@graphql';

import { Container } from './Product.styled';

const Product: React.FC<SimpleProductFragment> = ({ slug, name, image }) => {
    return (
        <Link href={`/catalog/${slug}`} passHref>
            <Container>
                {image?.sourceUrl && (
                    <Image
                        src={image.sourceUrl}
                        alt={name || ''}
                        layout="fill"
                        objectFit="cover"
                    />
                )}
            </Container>
        </Link>
    );
};

export default Product;
