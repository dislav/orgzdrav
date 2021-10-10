import { gql } from '@apollo/client';

export const VideoFragment = gql`
    fragment VideoFragment on Video {
        id
        slug
        title
        videosMain {
            description
            link
        }
    }
`;

export interface VideoProps {
    id: string;
    slug: string;
    title: string;
    videosMain: {
        description: string;
        link: string;
    };
}
