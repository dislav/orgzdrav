import React, { useCallback } from 'react';
import { UnpackNestedValue } from 'react-hook-form';
import { ApolloError } from '@apollo/client';

import { LoginMutationOptions } from '@graphql/mutations/login';
import { RegisterUserMutationInputs } from '@components/RegisterForm/RegisterForm';
import { ViewerProps } from '@graphql/fragments/viewer';
import { useLoginMutation } from '@hooks/useLoginMutation';
import { useRegisterMutation } from '@hooks/useRegisterMutation';

export const useAuth = () => {
    const [login, { loading: loginLoading }] = useLoginMutation();
    const [registerUser, { loading: registerLoading }] = useRegisterMutation();

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
            data: UnpackNestedValue<RegisterUserMutationInputs>,
            onSubmit?: (user?: ViewerProps) => Promise<void>
        ) => {
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

                    await onSubmit?.(response.data?.registerUser.user);

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

    return {
        onLogin,
        onRegister,
        isLoading: loginLoading || registerLoading,
    };
};
