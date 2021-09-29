import { gql } from '@apollo/client';

export const VideoFragment = gql`
    fragment VideoFragment on Video {
        id
        slug
        videosMain {
            link
        }
    }
`;

export interface VideoProps {
    id: string;
    slug: string;
    videosMain: {
        link: string;
    };
}
