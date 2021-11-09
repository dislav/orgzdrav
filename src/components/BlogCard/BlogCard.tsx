import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { PostProps } from '@graphql/fragments/post';
import { Container, ImageWrapper, Content } from './BlogCard.styled';

interface IBlogCard extends PostProps {
    className?: string;
}

const BlogCard: React.FC<IBlogCard> = ({
    className,
    slug,
    title,
    featuredImage,
}) => {
    return (
        <Link href={`/blog/${slug}`} passHref>
            <Container className={className}>
                {featuredImage.node.sourceUrl && (
                    <ImageWrapper>
                        <Image
                            src={featuredImage.node.sourceUrl}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </ImageWrapper>
                )}
                <Content>
                    <h3>{title}</h3>
                </Content>
            </Container>
        </Link>
    );
};

export default BlogCard;
