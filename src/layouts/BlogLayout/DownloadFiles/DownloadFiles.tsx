import React from 'react';
import Link from 'next/link';

import { Post_Postmain_Files } from '@graphql';

import { Container, File, FileContent, FileIcon } from './DownloadFiles.styled';
import { Download } from '@icons/icons';

interface IDownloadFiles {
    className?: string;
    files: Post_Postmain_Files[];
}

const DownloadFiles: React.FC<IDownloadFiles> = ({ className, files }) => {
    const getFileSize = (size: number) => (size / 1024).toFixed();

    const getFileExt = (mimeType: string) =>
        mimeType.split('/').slice(-1).toString().toUpperCase();

    return (
        <Container className={className}>
            {files.map((file, index) => (
                <Link
                    key={index}
                    href={file?.file?.mediaItemUrl || ''}
                    passHref
                >
                    <File>
                        <FileIcon>
                            <Download />
                        </FileIcon>
                        <FileContent>
                            {file?.file?.title && (
                                <span>{file.file.title}</span>
                            )}
                            {file?.file?.fileSize && file?.file?.mimeType && (
                                <span>
                                    {getFileSize(file?.file?.fileSize)} Кб —{' '}
                                    {getFileExt(file?.file?.mimeType)}
                                </span>
                            )}
                        </FileContent>
                    </File>
                </Link>
            ))}
        </Container>
    );
};

export default DownloadFiles;
