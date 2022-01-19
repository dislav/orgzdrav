import { useMutation } from '@apollo/client';
import {
    RegisterUserMutation,
    RegisterUserMutationProps,
    RegisterUserMutationQueryProps,
} from '@graphql/mutations/registerUser';

export const useRegisterMutation = () =>
    useMutation<RegisterUserMutationProps, RegisterUserMutationQueryProps>(
        RegisterUserMutation
    );
