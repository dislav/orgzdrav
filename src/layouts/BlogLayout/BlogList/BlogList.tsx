import React from 'react';

import { PostProps } from '@graphql/fragments/post';
import { Container } from './BlogList.styled';
import BlogCard from '@components/BlogCard/BlogCard';

interface IBlogList {
    posts: PostProps[];
}

const BlogList: React.FC<IBlogList> = ({ posts }) => {
    return (
        <Container>
            {posts.map((post) => (
                <BlogCard key={post.id} {...post} />
            ))}
        </Container>
    );
};

export default BlogList;
