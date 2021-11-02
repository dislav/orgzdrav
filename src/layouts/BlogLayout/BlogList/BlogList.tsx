import React from 'react';

import { PostProps } from '@graphql/fragments/post';
import { Container } from './BlogList.styled';

interface IBlogList {
    posts: PostProps[];
}

const BlogList: React.FC<IBlogList> = ({ posts }) => {
    return (
        <Container>
            {posts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </Container>
    );
};

export default BlogList;
