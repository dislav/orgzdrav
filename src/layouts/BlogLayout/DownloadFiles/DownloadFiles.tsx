import React from 'react';
import Link from 'next/link';

import { PostFileProps } from '@graphql/fragments/post';

import { Container, File, FileContent, FileIcon } from './DownloadFiles.styled';
import { Download } from '@icons/icons';

interface IDownloadFiles {
    className?: string;
    files: PostFileProps[];
}

const DownloadFiles: React.FC<IDownloadFiles> = ({ className, files }) => {
    const getFileSize = (size: number) => (size / 1024).toFixed();

    const getFileExt = (mimeType: string) =>
        mimeType.split('/').slice(-1).toString().toUpperCase();

    return (
        <Container className={className}>
            {files.map((file, index) => (
                <Link key={index} href={file.file.mediaItemUrl} passHref>
                    <File>
                        <FileIcon>
                            <Download />
                        </FileIcon>
                        <FileContent>
                            <span>{file.file.title}</span>
                            <span>
                                {getFileSize(file.file.fileSize)} Кб —{' '}
                                {getFileExt(file.file.mimeType)}
                            </span>
                        </FileContent>
                    </File>
                </Link>
            ))}
        </Container>
    );
};

export default DownloadFiles;
