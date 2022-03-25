import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import {
    GetDocumentsDocument,
    GetDocumentsQuery,
    GetDocumentsQueryVariables,
    DocumentFragment,
} from '@graphql';

import InformationLayout from '@layouts/InformationLayout/InformationLayout';
import DocumentList from '@components/DocumentList/DocumentList';

const Information: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    documents,
}) => {
    return (
        <InformationLayout meta={{ title: 'Документы' }}>
            {documents && documents.length > 0 && (
                <DocumentList documents={documents} />
            )}
        </InformationLayout>
    );
};

export const getStaticProps = async () => {
    const { data: documents } = await client.query<
        GetDocumentsQuery,
        GetDocumentsQueryVariables
    >({
        query: GetDocumentsDocument,
        fetchPolicy: 'no-cache',
        variables: { first: 100 },
    });

    return {
        props: {
            documents: ((documents.documents?.nodes as DocumentFragment) ||
                []) as DocumentFragment[],
        },
        revalidate: 1,
    };
};

export default Information;
