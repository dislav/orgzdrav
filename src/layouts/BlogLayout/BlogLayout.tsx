import React from 'react';

import { ILayout } from '@components/Layout/Layout';
import { Container, ImageWrapper } from './BlogLayout.styled';
import Image from '@components/Image/Image';

const BlogLayout: React.FC<ILayout> = ({ children, ...props }) => {
    return (
        <Container {...props}>
            {props.meta?.image && (
                <ImageWrapper>
                    <Image
                        src={props.meta.image}
                        alt={props.meta.title}
                        layout="fill"
                        objectFit="cover"
                    />
                </ImageWrapper>
            )}
            {children}
        </Container>
    );
};

export default BlogLayout;
