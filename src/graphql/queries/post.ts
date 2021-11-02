import { gql } from '@apollo/client';
import { ArticleFragment, PostProps } from '@graphql/fragments/post';

export const GetPostQuery = gql`
    ${ArticleFragment}
    query GetPost($id: ID!) {
        post(id: $id, idType: SLUG) {
            ...ArticleFragment
        }
    }
`;

export interface GetPostQueryProps {
    post: PostProps;
}
