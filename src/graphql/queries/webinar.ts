import { gql } from '@apollo/client';
import {
    SimpleProductFragment,
    SimpleProductProps,
} from '@graphql/fragments/simpleProduct';
import { Maybe } from '@graphql/graphql';

export const GetWebinarQuery = gql`
    ${SimpleProductFragment}
    query GetWebinar {
        page(id: "webinar", idType: URI) {
            title
            content
            webinarMain {
                time
                preview {
                    sourceUrl
                }
                webinar {
                    ...SimpleProductFragment
                }
            }
        }
    }
`;

export interface WebinarProps {
    time: string;
    webinar: SimpleProductProps;
    preview: {
        sourceUrl: Maybe<string>;
    };
}

export interface GetWebinarQueryProps {
    page: {
        title: string;
        content: string;
        webinarMain: WebinarProps;
    };
}
