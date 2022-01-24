import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { DocumentProps } from '@graphql/queries/documents';

import {
    Container,
    Document,
    Button,
    DocumentContent,
    DocumentDescription,
} from './DocumentList.styled';
import Modal from '@components/Modal/Modal';
import AuthModal from '@components/Header/AuthModal/AuthModal';

import { useDocumentQuery } from '@hooks/useDocumentQuery';
import { useTogglable } from '@hooks/useTogglable';
import { getIsLoggedIn } from '@redux/profile/selectors';

interface IDocumentList {
    className?: string;
    documents: DocumentProps[];
}

const DocumentList: React.FC<IDocumentList> = ({ className, documents }) => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const isLoggedIn = useSelector(getIsLoggedIn);

    const { isOpen, onOpen, onClose } = useTogglable();

    const { refetch: fetchDocument } = useDocumentQuery({ skip: true });

    const onDownload = useCallback(
        async (slug: string) => {
            setIsLoading(true);

            try {
                const response = await fetchDocument({ id: slug });

                if (response.data?.document?.documentMain?.file?.mediaItemUrl)
                    await router.push(
                        response.data.document.documentMain.file.mediaItemUrl
                    );
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        },
        [fetchDocument, router]
    );

    const onDownloadHandler = (slug: string) => () => {
        if (isLoggedIn) {
            onDownload(slug);
        } else {
            onOpen();
        }
    };

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

                    <Button
                        isLoading={isLoading}
                        onClick={onDownloadHandler(document.slug)}
                    >
                        Скачать (
                        {getFileSize(document.documentMain.file.fileSize)} Кб)
                    </Button>
                </Document>
            ))}

            <Modal isOpen={isOpen} onClose={onClose}>
                <AuthModal />
            </Modal>
        </Container>
    );
};

export default DocumentList;
