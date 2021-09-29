import { gql } from '@apollo/client';
import { ViewerFragment, ViewerProps } from '@graphql/fragments/viewer';

export const LoginMutation = gql`
    ${ViewerFragment}
    mutation LoginMutation($password: String!, $username: String!) {
        login(input: { password: $password, username: $username }) {
            authToken
            user {
                ...ViewerFragment
            }
        }
    }
`;

export interface LoginMutationOptions {
    password: string;
    username: string;
}

export interface LoginMutationProps {
    login: {
        authToken: string;
        user: ViewerProps;
    };
}
