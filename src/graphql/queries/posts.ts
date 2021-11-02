import { gql } from '@apollo/client';
import { ArticleFragment, PostProps } from '@graphql/fragments/post';

export const GetPostsQuery = gql`
    ${ArticleFragment}
    query Posts {
        posts {
            nodes {
                ...ArticleFragment
            }
        }
    }
`;

export interface GetPostsQueryProps {
    posts: {
        nodes: PostProps[];
    };
}
