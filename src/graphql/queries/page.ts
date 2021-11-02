import { gql } from '@apollo/client';

export const GetPageQuery = gql`
    query GetPage($id: ID!) {
        page(id: $id, idType: URI) {
            title
            content
        }
    }
`;

export interface GetPageQueryProps {
    page: {
        title: string;
        content: string;
    };
}
