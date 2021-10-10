import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ApolloError, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import {
    LoginMutation,
    LoginMutationOptions,
    LoginMutationProps,
} from '@graphql/mutations/login';

import { Container, Input, Button } from './LoginForm.styled';
import FormErrors from '@components/FormErrors/FormErrors';

const LoginForm: React.FC = () => {
    const router = useRouter();

    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    const [login, { loading }] = useMutation<
        LoginMutationProps,
        LoginMutationOptions
    >(LoginMutation);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginMutationOptions>();

    const onSubmit: SubmitHandler<LoginMutationOptions> = async (data) => {
        setErrorMessages([]);

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
            const messages = (e as ApolloError)?.graphQLErrors.map(
                ({ message }) => message
            );
            if (messages) setErrorMessages(messages);
        }
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <h2>Авторизация</h2>
            <Input
                name="username"
                placeholder="Имя пользователя"
                register={register}
                options={{
                    required: 'Обязательное поле',
                }}
                error={errors?.['username']?.message}
            />
            <Input
                name="password"
                type="password"
                placeholder="Пароль"
                register={register}
                options={{
                    required: 'Обязательное поле',
                }}
                error={errors?.['password']?.message}
            />

            {errorMessages?.length > 0 && (
                <FormErrors messages={errorMessages} />
            )}

            <Button isLoading={loading}>Войти</Button>
        </Container>
    );
};

export default LoginForm;
