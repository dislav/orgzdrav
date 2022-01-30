import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { useGetDocumentLazyQuery, DocumentFragment } from '@graphql';

import {
    Container,
    Document,
    DocumentContent,
    DocumentDescription,
    AuthButton,
} from './DocumentList.styled';

interface IDocumentList {
    className?: string;
    documents: DocumentFragment[];
}

const DocumentList: React.FC<IDocumentList> = ({ className, documents }) => {
    const router = useRouter();

    const [fetchDocument, { loading }] = useGetDocumentLazyQuery();

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
                        <span>{document.documentMain?.file?.title}</span>
                        {document.excerpt && (
                            <DocumentDescription
                                dangerouslySetInnerHTML={{
                                    __html: document.excerpt,
                                }}
                            />
                        )}
                    </DocumentContent>

                    {document.slug && document.documentMain?.file?.fileSize && (
                        <AuthButton
                            onClick={onDownloadHandler(document.slug)}
                            onSuccessAuth={router.reload}
                            isLoading={loading}
                        >
                            Скачать (
                            {getFileSize(document.documentMain.file.fileSize)}{' '}
                            Кб)
                        </AuthButton>
                    )}
                </Document>
            ))}
        </Container>
    );
};

export default DocumentList;
