import React, { useCallback } from 'react';
import { UnpackNestedValue } from 'react-hook-form';
import { ApolloError } from '@apollo/client';

import {
    LoginInput,
    SendPasswordResetEmailInput,
    useLoginMutation,
    useRegisterCustomerMutation,
    useSendPasswordResetEmailMutation,
    CustomerFragment,
} from '@graphql';
import { RegisterUserInputProps } from '@components/RegisterForm/types';

import { useConfig } from '@context/configProvider';

export const useAuth = () => {
    const { ymCode } = useConfig().global;

    const [login, { loading: loginLoading }] = useLoginMutation();

    const [registerCustomer, { loading: registerLoading }] =
        useRegisterCustomerMutation();

    const [passwordReset, { loading: passwordResetLoading }] =
        useSendPasswordResetEmailMutation();

    const onLogin = useCallback(
        async (
            data: UnpackNestedValue<LoginInput>,
            onSubmit?: (user: CustomerFragment) => Promise<void> | void
        ) => {
            try {
                const response = await login({ variables: { input: data } });

                if (
                    response.data?.login?.customer &&
                    response.data.login.authToken
                ) {
                    localStorage.setItem(
                        'authToken',
                        response.data.login.authToken
                    );

                    await onSubmit?.(response.data.login.customer);

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
            onSubmit?: (user: CustomerFragment) => Promise<void> | void
        ) => {
            try {
                const response = await registerCustomer({
                    variables: { input: data },
                });

                if (response.data?.registerCustomer?.customer) {
                    const registeredUser =
                        response.data.registerCustomer.customer;

                    if (registeredUser.jwtAuthToken)
                        localStorage.setItem(
                            'authToken',
                            registeredUser.jwtAuthToken
                        );

                    // @ts-ignore
                    ym(ymCode, 'reachGoal', 'REGISTER', {
                        first_name: registeredUser.firstName,
                        last_name: registeredUser.lastName,
                        email: registeredUser.email,
                        phone: registeredUser.billing?.phone || '',
                    });

                    await onSubmit?.(registeredUser);

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
        [registerCustomer]
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
