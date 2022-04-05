import React from 'react';

import { PostFragment } from '@graphql';

import { Container } from './BlogList.styled';
import BlogCard from '@components/BlogCard/BlogCard';
import EmptyList from '@components/EmptyList/EmptyList';

interface IBlogList {
    posts: PostFragment[];
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
