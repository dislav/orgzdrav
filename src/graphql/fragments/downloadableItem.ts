import { gql } from '@apollo/client';
import { Maybe } from '@graphql/graphql';
import { FileFragment, FileProps } from '@graphql/fragments/file';

export const DownloadableItemFragment = gql`
    ${FileFragment}
    fragment DownloadableItemFragment on DownloadableItem {
        name
        accessExpires
        url
        download {
            ...FileFragment
        }
    }
`;

export interface DownloadableItemProps {
    name: string;
    accessExpires: Maybe<string>;
    url: string;
    download: FileProps;
}
