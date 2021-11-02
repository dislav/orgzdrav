import { gql } from '@apollo/client';
import {
    SimpleProductFragment,
    SimpleProductProps,
} from '@graphql/fragments/simpleProduct';
import { Maybe } from '@graphql/graphql';
import { WithFieldGroupName } from '@graphql/types';

export const ArticleFragment = gql`
    ${SimpleProductFragment}
    fragment ArticleFragment on Post {
        id
        slug
        title
        excerpt
        featuredImage {
            node {
                sourceUrl
            }
        }
        postMain {
            content {
                ... on Post_Postmain_Content_SectionText {
                    title
                    text
                    fieldGroupName
                }
                ... on Post_Postmain_Content_SectionSlider {
                    gallery {
                        sourceUrl
                    }
                    fieldGroupName
                }
                ... on Post_Postmain_Content_SectionLink {
                    post {
                        ... on Post {
                            id
                            slug
                            title
                            excerpt
                            featuredImage {
                                node {
                                    sourceUrl
                                }
                            }
                        }
                    }
                    fieldGroupName
                }
                ... on Post_Postmain_Content_SectionProduct {
                    product {
                        ...SimpleProductFragment
                    }
                    fieldGroupName
                }
            }
        }
    }
`;

export interface PostProps {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: {
        node: {
            sourceUrl: Maybe<string>;
        };
    };
    postMain: {
        content: WithFieldGroupName<{
            title?: Maybe<string>;
            text?: string;
            gallery?: { sourceUrl: string }[];
            post?: PostProps;
            product?: SimpleProductProps;
        }>[];
    };
}
