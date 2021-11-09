import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CommonComponentsProps } from '@graphql/types';
import { Container, ImageWrapper, Content } from './SectionLink.styled';

const SectionLink: React.FC<CommonComponentsProps> = ({ post }) => {
    return (
        <Link href={post?.slug ? `/blog/${post.slug}` : ''} passHref>
            <Container>
                {post?.featuredImage.node.sourceUrl && (
                    <ImageWrapper>
                        <Image
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </ImageWrapper>
                )}
                <Content>
                    {post?.title && <h3>{post.title}</h3>}
                    {post?.excerpt && (
                        <span
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                    )}
                </Content>
            </Container>
        </Link>
    );
};

export default SectionLink;
