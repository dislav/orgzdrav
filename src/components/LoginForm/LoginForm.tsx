import React from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import {
    LoginMutation,
    LoginMutationOptions,
    LoginMutationProps,
} from '@graphql/mutations/login';

import { Container, Input } from './LoginForm.styled';
import Button from '@components/Button/Button';
import { setUser } from '@redux/user/actions';

interface ILoginForm {
    onSuccess?: () => void;
}

const LoginForm: React.FC<ILoginForm> = ({ onSuccess }) => {
    const dispatch = useDispatch();

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
        try {
            const response = await login({ variables: data });

            if (response.data?.login) {
                localStorage.setItem(
                    'authToken',
                    response.data.login.authToken
                );

                dispatch(setUser(response.data.login.user));
                onSuccess?.();
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
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
            <Button isLoading={loading}>Войти</Button>
        </Container>
    );
};

export default LoginForm;
