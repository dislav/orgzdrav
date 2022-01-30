import React, { useCallback } from 'react';
import { UnpackNestedValue } from 'react-hook-form';
import { ApolloError } from '@apollo/client';

import {
    LoginInput,
    SendPasswordResetEmailInput,
    useLoginMutation,
    useRegisterUserMutation,
    useSendPasswordResetEmailMutation,
    ViewerFragment,
} from '@graphql';
import { RegisterUserInputProps } from '@components/RegisterForm/types';

export const useAuth = () => {
    const [login, { loading: loginLoading }] = useLoginMutation();

    const [registerUser, { loading: registerLoading }] =
        useRegisterUserMutation();

    const [passwordReset, { loading: passwordResetLoading }] =
        useSendPasswordResetEmailMutation();

    const onLogin = useCallback(
        async (
            data: UnpackNestedValue<LoginInput>,
            onSubmit?: (user: ViewerFragment) => Promise<void> | void
        ) => {
            try {
                const response = await login({ variables: { input: data } });

                if (
                    response.data?.login?.user &&
                    response.data.login.authToken
                ) {
                    localStorage.setItem(
                        'authToken',
                        response.data.login.authToken
                    );

                    await onSubmit?.(response.data.login.user);

                    return response;
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
        async (
            data: UnpackNestedValue<RegisterUserInputProps>,
            onSubmit?: (user: ViewerFragment) => Promise<void> | void
        ) => {
            try {
                const { confirmPassword, ...input } = data;

                const response = await registerUser({
                    variables: { input },
                });

                if (
                    response.data?.registerUser?.user &&
                    response.data.registerUser.user.jwtAuthToken
                ) {
                    localStorage.setItem(
                        'authToken',
                        response.data.registerUser.user.jwtAuthToken
                    );

                    await onSubmit?.(response.data.registerUser.user);

                    return response;
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
        [registerUser]
    );

    const onPasswordReset = useCallback(
        async (data: UnpackNestedValue<SendPasswordResetEmailInput>) => {
            try {
                const response = await passwordReset({
                    variables: { input: data },
                });

                if (response.data?.sendPasswordResetEmail)
                    return {
                        status: true,
                    };
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
        [passwordReset]
    );

    return {
        onLogin,
        onRegister,
        onPasswordReset,
        isLoading: loginLoading || registerLoading || passwordResetLoading,
    };
};
