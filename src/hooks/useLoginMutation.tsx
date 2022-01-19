import { useMutation } from '@apollo/client';
import {
    LoginMutation,
    LoginMutationOptions,
    LoginMutationProps,
} from '@graphql/mutations/login';

export const useLoginMutation = () =>
    useMutation<LoginMutationProps, LoginMutationOptions>(LoginMutation);
