import { useMutation } from '@apollo/client';
import {
    UpdateUserInputProps,
    UpdateUserMutation,
    UpdateUserMutationProps,
} from '@graphql/mutations/updateUser';

export const useUpdateUserMutation = () =>
    useMutation<UpdateUserMutationProps, UpdateUserInputProps>(
        UpdateUserMutation
    );
