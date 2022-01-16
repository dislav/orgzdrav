import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { UnpackNestedValue } from 'react-hook-form';
import { ApolloError, useMutation } from '@apollo/client';

import {
    LoginMutation,
    LoginMutationOptions,
    LoginMutationProps,
} from '@graphql/mutations/login';
import { RegisterUserMutationInputs } from '@components/RegisterForm/RegisterForm';
import {
    RegisterUserMutation,
    RegisterUserMutationProps,
    RegisterUserMutationQueryProps,
} from '@graphql/mutations/registerUser';
import { ViewerProps } from "@graphql/fragments/viewer"

export const useAuth = () => {
    const router = useRouter();

    const [login] = useMutation<LoginMutationProps, LoginMutationOptions>(
        LoginMutation
    );

    const [registerUser] = useMutation<
        RegisterUserMutationProps,
        RegisterUserMutationQueryProps
    >(RegisterUserMutation);

    const onLogin = useCallback(
        async (
            data: UnpackNestedValue<LoginMutationOptions>,
            onSubmit?: (user?: ViewerProps) => Promise<void>
        ) => {
            try {
                const response = await login({ variables: data });

                if (response.data?.login) {
                    localStorage.setItem(
                        'authToken',
                        response.data.login.authToken
                    );

                    await onSubmit?.(response.data.login.user);
                }
            } catch (e) {
                const errors = (e as ApolloError)?.graphQLErrors.map(
                    ({ message }) => message
                );

                if (errors)
                    return {
                        errors,
                    };
            }
        },
        [login]
    );

    const onRegister = useCallback(
        async (data: UnpackNestedValue<RegisterUserMutationInputs>) => {
            try {
                const { confirmPassword, ...input } = data;

                const response = await registerUser({
                    variables: { input },
                });

                if (response.data?.registerUser) {
                    localStorage.setItem(
                        'authToken',
                        response.data.registerUser.user.jwtAuthToken
                    );

                    await router.reload();
                }
            } catch (e) {
                const errors = (e as ApolloError)?.graphQLErrors.map(
                    ({ message }) => message
                );

                if (errors)
                    return {
                        errors,
                    };
            }
        },
        [registerUser, router]
    );

    return {
        onLogin,
        onRegister,
    };
};
