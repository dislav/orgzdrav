import { gql } from '@apollo/client';
import { ViewerFragment, ViewerProps } from '@graphql/fragments/viewer';

export const RegisterUserMutation = gql`
    ${ViewerFragment}
    mutation registerUser($input: RegisterUserInput!) {
        registerUser(input: $input) {
            user {
                ...ViewerFragment
                jwtAuthToken
            }
        }
    }
`;

interface RegisterUser extends ViewerProps {
    jwtAuthToken: string;
}

export interface RegisterUserMutationQueryProps {
    input: {
        email: string;
        username: string;
        firstName: string;
        lastName: string;
        password: string;
    };
}

export interface RegisterUserMutationProps {
    registerUser: {
        user: RegisterUser;
    };
}
