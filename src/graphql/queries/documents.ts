import { gql } from '@apollo/client';

export const GetDocumentsQuery = gql`
    query GetDocuments {
        documents {
            nodes {
                slug
                title
                excerpt
                documentMain {
                    file {
                        title
                        fileSize
                        mimeType
                    }
                }
            }
        }
    }
`;

export interface DocumentFileProps {
    title: string;
    fileSize: number;
    mimeType: string;
    mediaItemUrl: string;
}

export interface DocumentProps {
    slug: string;
    title: string;
    excerpt: string;
    documentMain: {
        file: DocumentFileProps;
    };
}

export interface GetDocumentsQueryProps {
    documents: {
        nodes: DocumentProps[];
    };
}
