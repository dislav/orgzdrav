import React from 'react';

import client from '@graphql/client';
import {
    GetDocumentsQuery,
    GetDocumentsQueryProps,
} from '@graphql/queries/documents';
import { InferGetStaticPropsType } from 'next';

import Layout from '@components/Layout/Layout';
import DocumentList from '@components/DocumentList/DocumentList';

const Documents: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    documents,
}) => {
    return (
        <Layout meta={{ title: 'Документы' }}>
            {documents.length > 0 && <DocumentList documents={documents} />}
        </Layout>
    );
};

export const getStaticProps = async () => {
    const { data: documents } = await client.query<
        GetDocumentsQueryProps,
        Partial<{
            first: number;
        }>
    >({
        query: GetDocumentsQuery,
        fetchPolicy: 'no-cache',
        variables: {
            first: 100,
        },
    });

    return {
        props: {
            documents: documents.documents.nodes,
        },
        revalidate: 1,
    };
};

export default Documents;
