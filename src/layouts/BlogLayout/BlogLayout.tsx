import React from 'react';

import { Container } from './BlogLayout.styled';

interface IBlogLayout {}

const BlogLayout: React.FC<IBlogLayout> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default BlogLayout;
