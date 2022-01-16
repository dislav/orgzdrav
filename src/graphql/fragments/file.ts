import { gql } from '@apollo/client';

export const FileFragment = gql`
    fragment FileFragment on ProductDownload {
        fileExt
        fileExists
        fileType
        downloadId
    }
`;

export interface FileProps {
    fileExt: string;
    fileExists: boolean;
    fileType: string;
    downloadId: string;
}
