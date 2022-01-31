import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Post_Postmain_Content_SectionProduct } from '@graphql';

import { Container, ImageWrapper, Content } from './SectionProduct.styled';

const SectionProduct: React.FC<Post_Postmain_Content_SectionProduct> = ({
    product,
}) => {
    return (
        <Link href={product?.slug ? `/catalog/${product.slug}` : ''} passHref>
            <Container>
                {product?.image?.sourceUrl && (
                    <ImageWrapper>
                        <Image
                            src={product.image.sourceUrl}
                            alt={product?.name || ''}
                            layout="fill"
                            objectFit="cover"
                        />
                    </ImageWrapper>
                )}

                <Content>
                    {product?.name && <h3>{product.name}</h3>}
                    {product?.price && (
                        <span
                            dangerouslySetInnerHTML={{ __html: product.price }}
                        />
                    )}
                </Content>
            </Container>
        </Link>
    );
};

export default SectionProduct;
