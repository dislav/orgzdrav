import React from 'react';

import { PostProps } from '@graphql/fragments/post';
import { Container } from './BlogList.styled';
import BlogCard from '@components/BlogCard/BlogCard';
import EmptyList from '@components/EmptyList/EmptyList';

interface IBlogList {
    posts: PostProps[];
}

const BlogList: React.FC<IBlogList> = ({ posts }) => {
    return (
        <Container>
            {posts.length > 0 ? (
                posts.map((post) => <BlogCard key={post.id} {...post} />)
            ) : (
                <EmptyList>Список статей пуст</EmptyList>
            )}
        </Container>
    );
};

export default BlogList;
