import { gql } from '@apollo/client';
import { ViewerFragment, ViewerProps } from '@graphql/fragments/viewer';

export const GetViewerQuery = gql`
    ${ViewerFragment}
    query GetViewer {
        viewer {
            ...ViewerFragment
        }
    }
`;

export interface GetViewerQueryProps {
    viewer: ViewerProps;
}
