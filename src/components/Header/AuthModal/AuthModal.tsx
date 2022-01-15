import React from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import {
    LoginMutation,
    LoginMutationOptions,
    LoginMutationProps,
} from '@graphql/mutations/login';
import {
    RegisterUserMutation,
    RegisterUserMutationProps,
    RegisterUserMutationQueryProps,
} from '@graphql/mutations/registerUser';
import AuthForm from '@components/AuthForm/AuthForm';
import { SubmitHandler } from 'react-hook-form';
import { RegisterUserMutationInputs } from '@components/RegisterForm/RegisterForm';

interface IAuthModal {
    className?: string;
}

const AuthModal: React.FC<IAuthModal> = ({ className }) => {
    const router = useRouter();

    const [login] = useMutation<LoginMutationProps, LoginMutationOptions>(
        LoginMutation
    );

    const [registerUser] = useMutation<
        RegisterUserMutationProps,
        RegisterUserMutationQueryProps
    >(RegisterUserMutation);

    const onLogin: SubmitHandler<LoginMutationOptions> = async (data) => {
        try {
            const response = await login({ variables: data });

            if (response.data?.login) {
                localStorage.setItem(
                    'authToken',
                    response.data.login.authToken
                );

                router.reload();
            }

            return response;
        } catch (e) {
            const errors = (e as ApolloError)?.graphQLErrors.map(
                ({ message }) => message
            );

            if (errors)
                return {
                    errors,
                };
        }
    };

    const onRegister: SubmitHandler<RegisterUserMutationInputs> = async (
        data
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
    };

    return (
        <AuthForm
            className={className}
            onLogin={onLogin}
            onRegister={onRegister}
        />
    );
};

export default AuthModal;
