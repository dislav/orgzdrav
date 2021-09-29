import { gql } from '@apollo/client';
import { VideoFragment, VideoProps } from '@graphql/fragments/video';
import { Maybe } from '@graphql/graphql';

export const ViewerFragment = gql`
    ${VideoFragment}
    fragment ViewerFragment on User {
        id
        userId
        username
        firstName
        lastName
        videos {
            availableVideos {
                ...VideoFragment
            }
        }
    }
`;

export interface ViewerProps {
    id: string;
    userId: Maybe<number>;
    username: string;
    firstName: Maybe<string>;
    lastName: Maybe<string>;
    videos: {
        availableVideos: VideoProps[];
    };
}
