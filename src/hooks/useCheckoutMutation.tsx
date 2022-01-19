import { useMutation } from '@apollo/client';
import {
    CheckoutMutation,
    CheckoutMutationProps,
    CheckoutMutationQueryProps,
} from '@graphql/mutations/checkout';

export const useCheckoutMutation = () =>
    useMutation<CheckoutMutationProps, CheckoutMutationQueryProps>(
        CheckoutMutation
    );
