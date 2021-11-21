import { gql } from '@apollo/client';
import { ViewerFragment, ViewerProps } from '@graphql/fragments/viewer';

export const UpdateUserMutation = gql`
    ${ViewerFragment}
    mutation updateUserMutation($input: UpdateUserInput!) {
        updateUser(input: $input) {
            user {
                ...ViewerFragment
            }
        }
    }
`;

export interface UpdateUserInputProps {
    input: { id: string } & Partial<ViewerProps>;
}

export interface UpdateUserMutationProps {
    updateUser: {
        user: ViewerProps;
    };
}
