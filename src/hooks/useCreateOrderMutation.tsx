import { useMutation } from '@apollo/client';
import {
    CreateOrderMutation,
    CreateOrderMutationProps,
    CreateOrderMutationQueryProps,
} from '@graphql/mutations/createOrder';

export const useCreateOrderMutation = () =>
    useMutation<CreateOrderMutationProps, CreateOrderMutationQueryProps>(
        CreateOrderMutation
    );
