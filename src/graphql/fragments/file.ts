import { gql } from '@apollo/client';

export const FileFragment = gql`
    fragment FileFragment on ProductDownload {
        file
        fileExt
        fileExists
        fileType
        downloadId
    }
`;

export interface FileProps {
    file: string;
    fileExt: string;
    fileExists: boolean;
    fileType: string;
    downloadId: string;
}
