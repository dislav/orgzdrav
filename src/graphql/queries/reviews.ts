import { gql } from '@apollo/client';
import { Maybe } from '@graphql/graphql';

export const GetReviewsQuery = gql`
    query GetPeopleReviews {
        peopleReviews {
            nodes {
                slug
                title
                reviewMain {
                    image {
                        sourceUrl
                    }
                }
            }
        }
    }
`;

export interface PeopleReviewProps {
    slug: string;
    title: string;
    reviewMain: {
        image: {
            sourceUrl: Maybe<string>;
        };
    };
}

export interface GetReviewsQueryProps {
    peopleReviews: {
        nodes: PeopleReviewProps[];
    };
}
