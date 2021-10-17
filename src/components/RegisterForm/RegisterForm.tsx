import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

import {
    RegisterUserMutation,
    RegisterUserMutationProps,
    RegisterUserMutationQueryProps,
} from '@graphql/mutations/registerUser';
import { AuthType } from '@components/AuthForm/AuthForm';

import { emailRegex } from '@constants/constants';
import { Container, Input, Button } from './RegisterForm.styled';
import { ApolloError, useMutation } from '@apollo/client';
import FormErrors from '@components/FormErrors/FormErrors';

interface IRegisterForm {
    setType: (type: AuthType) => void;
}

type Inputs = RegisterUserMutationQueryProps['input'] & {
    confirmPassword: string;
};

const RegisterForm: React.FC<IRegisterForm> = ({ setType }) => {
    const router = useRouter();

    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const [registerUser, { loading }] = useMutation<
        RegisterUserMutationProps,
        RegisterUserMutationQueryProps
    >(RegisterUserMutation);

    const password = watch('password', '');

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
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
            const messages = (e as ApolloError)?.graphQLErrors.map(
                ({ message }) => message
            );
            if (messages) setErrorMessages(messages);
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
                error={errors.username?.message}
            />
            <Input
                name="email"
                placeholder="E-mail"
                register={register}
                options={{
                    required: 'Обязательное поле',
                    pattern: {
                        value: emailRegex,
                        message: 'Неверный формат почты',
                    },
                }}
                error={errors.email?.message}
            />
            <Input
                name="firstName"
                placeholder="Имя"
                register={register}
                options={{
                    required: 'Обязательное поле',
                }}
                error={errors.firstName?.message}
            />
            <Input
                name="lastName"
                placeholder="Фамилия"
                register={register}
                options={{
                    required: 'Обязательное поле',
                }}
                error={errors.lastName?.message}
            />
            <Input
                name="password"
                placeholder="Пароль"
                type="password"
                register={register}
                options={{
                    required: 'Обязательное поле',
                    minLength: {
                        value: 6,
                        message: 'Пароль должен содержать больше 6 символов',
                    },
                }}
                error={errors.password?.message}
            />
            <Input
                name="confirmPassword"
                placeholder="Подтверждение пароля"
                type="password"
                register={register}
                options={{
                    required: 'Обязательное поле',
                    validate: (value) =>
                        value === password || 'Пароли не совпадают',
                }}
                error={errors.confirmPassword?.message}
            />

            {errorMessages.length > 0 && (
                <FormErrors messages={errorMessages} />
            )}

            <Button isLoading={loading}>Зарегистрироваться</Button>

            <p>
                Есть аккаунт?{' '}
                <span onClick={() => setType(AuthType.Login)}>Войти</span>
            </p>
        </Container>
    );
};

export default RegisterForm;
