import { gql } from '@apollo/client';
import { Maybe } from '@graphql/graphql';
import { CommonComponentsProps, WithFieldGroupName } from '@graphql/types';

export const SimpleProductFragment = gql`
    fragment SimpleProductFragment on SimpleProduct {
        id
        name
        slug
        price
        regularPrice
        salePrice
        image {
            sourceUrl
        }
        galleryImages {
            nodes {
                sourceUrl
            }
        }
        productAdditional {
            content {
                ... on Product_Productadditional_Content_SectionText {
                    title
                    text
                    fieldGroupName
                }
                ... on Product_Productadditional_Content_Image {
                    image {
                        sourceUrl
                    }
                    fieldGroupName
                }
            }
        }
    }
`;

export interface SimpleProductProps {
    id: string;
    name: string;
    slug: string;
    price: string;
    regularPrice: string;
    salePrice: Maybe<string>;
    image: Maybe<{
        sourceUrl: string;
    }>;
    galleryImages: {
        nodes: {
            sourceUrl: string;
        }[];
    };
    productAdditional: {
        content: WithFieldGroupName<CommonComponentsProps>[];
    };
}
