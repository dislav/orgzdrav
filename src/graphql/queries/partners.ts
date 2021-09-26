import { gql } from '@apollo/client';
import { Maybe } from '@graphql/graphql';

export const GetPartnersQuery = gql`
    query GetPartners {
        partners {
            nodes {
                slug
                title
                partnerMain {
                    image {
                        sourceUrl
                    }
                    description
                    city
                    link
                }
            }
        }
    }
`;

export interface PartnerProps {
    slug: string;
    title: string;
    partnerMain: {
        image: {
            sourceUrl: Maybe<string>;
        };
        description: Maybe<string>;
        city: Maybe<string>;
        link: Maybe<string>;
    };
}

export interface GetPartnersQueryProps {
    partners: {
        nodes: PartnerProps[];
    };
}
