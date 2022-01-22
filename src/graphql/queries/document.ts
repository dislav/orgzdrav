import { gql } from '@apollo/client';
import { DocumentProps } from '@graphql/queries/documents';

export const GetDocumentQuery = gql`
    query GetDocument($id: ID!, $idType: DocumentIdType = SLUG) {
        document(id: $id, idType: $idType) {
            slug
            title
            excerpt
            documentMain {
                file {
                    title
                    fileSize
                    mimeType
                    mediaItemUrl
                }
            }
        }
    }
`;

export interface GetDocumentQueryVariables {
    id: string;
    idType: string;
}

export interface GetDocumentQueryProps {
    document: DocumentProps;
}
