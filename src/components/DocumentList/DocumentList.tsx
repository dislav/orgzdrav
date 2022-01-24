import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { DocumentProps } from '@graphql/queries/documents';

import {
    Container,
    Document,
    DocumentContent,
    DocumentDescription,
    AuthButton,
} from './DocumentList.styled';

import { useDocumentQuery } from '@hooks/useDocumentQuery';

interface IDocumentList {
    className?: string;
    documents: DocumentProps[];
}

const DocumentList: React.FC<IDocumentList> = ({ className, documents }) => {
    const router = useRouter();

    const [fetchDocument, { loading }] = useDocumentQuery({ skip: true });

    const onDownload = useCallback(
        async (slug: string) => {
            try {
                const { data } = await fetchDocument({
                    variables: { id: slug },
                });

                if (data?.document?.documentMain?.file?.mediaItemUrl)
                    await router.push(
                        data.document.documentMain.file.mediaItemUrl
                    );
            } catch (e) {
                console.log(e);
            }
        },
        [fetchDocument, router]
    );

    const onDownloadHandler = (slug: string) => () => onDownload(slug);

    const getFileSize = (size: number) => (size / 1024).toFixed();

    return (
        <Container className={className}>
            {documents.map((document, index) => (
                <Document key={index}>
                    <DocumentContent>
                        <span>{document.documentMain.file.title}</span>
                        <DocumentDescription
                            dangerouslySetInnerHTML={{
                                __html: document.excerpt,
                            }}
                        />
                    </DocumentContent>

                    <AuthButton
                        onClick={onDownloadHandler(document.slug)}
                        onSuccessAuth={router.reload}
                        isLoading={loading}
                    >
                        Скачать (
                        {getFileSize(document.documentMain.file.fileSize)} Кб)
                    </AuthButton>
                </Document>
            ))}
        </Container>
    );
};

export default DocumentList;
