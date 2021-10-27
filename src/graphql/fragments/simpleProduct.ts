import { gql } from '@apollo/client';
import { Maybe } from '@graphql/graphql';
import { CommonComponentsProps, WithFieldGroupName } from '@graphql/types';

export const SimpleProductFragment = gql`
    fragment SimpleProductFragment on SimpleProduct {
        id
        databaseId
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
            }
        }
    }
`;

export type ProductOption = {
    name: string;
    price: number;
};

export interface SimpleProductProps {
    id: string;
    databaseId: number;
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
        hasAdditionalOptions: boolean;
        options: Maybe<ProductOption[]>
    };
}
