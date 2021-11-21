import { gql } from '@apollo/client';
import { Maybe } from '@graphql/graphql';

export const ViewerFragment = gql`
    fragment ViewerFragment on User {
        id
        userId
        username
        firstName
        lastName
        email
    }
`;

export interface ViewerProps {
    id: string;
    userId: Maybe<number>;
    username: string;
    firstName: Maybe<string>;
    lastName: Maybe<string>;
    email: string;
}
