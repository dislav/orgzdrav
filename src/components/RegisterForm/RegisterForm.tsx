import React, { useState } from 'react';
import { Checkbox, Tooltip } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import NextLink from 'next/link';

import { AuthType } from '@components/AuthForm/AuthForm';
import { RegisterUserInputProps } from '@components/RegisterForm/types';

import {
    Container,
    Input,
    FormErrors,
    Footer,
    Button,
    Link,
    Accept,
    AcceptLabel,
} from './RegisterForm.styled';

import { useConfig } from '@context/configProvider';

interface IRegisterForm {
    setType: (type: AuthType) => void;
    onSubmit: SubmitHandler<RegisterUserInputProps>;
}

const RegisterForm: React.FC<IRegisterForm> = ({ setType, onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    const { username: usernameRegex, email: emailRegex } = useConfig().regex;

    const { handleSubmit, control, watch } = useForm<RegisterUserInputProps>();

    const password = watch('password', '');

    const onSubmitHandler: SubmitHandler<RegisterUserInputProps> = async (
        data
    ) => {
        setIsLoading(true);
        setErrorMessages([]);

        try {
            const response = await onSubmit(data);

            if (response?.errors) {
                setErrorMessages(response.errors);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const onChangeType = (type: AuthType) => () => setType(type);

    return (
        <Container onSubmit={handleSubmit(onSubmitHandler)}>
            <Input
                name="username"
                label="Имя пользователя"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                    pattern: {
                        value: usernameRegex,
                        message:
                            'Имя пользователя должно содерждать только латинские символы',
                    },
                }}
            />
            <Input
                name="email"
                label="E-mail"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                    pattern: {
                        value: emailRegex,
                        message: 'Неверный формат почты',
                    },
                }}
            />
            <Input
                name="firstName"
                label="Имя"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                }}
            />
            <Input
                name="lastName"
                label="Фамилия"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                }}
            />
            <Input
                name="password"
                label="Пароль"
                type="password"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                    minLength: {
                        value: 6,
                        message: 'Пароль должен содержать больше 6 символов',
                    },
                }}
            />
            <Input
                name="confirmPassword"
                label="Подтверждение пароля"
                type="password"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                    validate: (value) =>
                        value === password || 'Пароли не совпадают',
                }}
            />

            {errorMessages.length > 0 && (
                <FormErrors messages={errorMessages} />
            )}

            <Accept>
                <Controller
                    name="accept"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <Tooltip
                            open={!!error}
                            title={error?.message || ''}
                            placement="top-start"
                        >
                            <AcceptLabel
                                control={<Checkbox {...field} />}
                                label={
                                    <>
                                        Я согласен{' '}
                                        <NextLink href="/privacy-policy">
                                            <a>
                                                с политикой конфиденциальности
                                            </a>
                                        </NextLink>{' '}
                                        и{' '}
                                        <NextLink href="/public-offer">
                                            <a>публичной оффертой</a>
                                        </NextLink>
                                    </>
                                }
                            />
                        </Tooltip>
                    )}
                    rules={{
                        required: 'Для регистрации Вам необходимо согласиться',
                    }}
                />
            </Accept>

            <Footer>
                <Button type="submit" isLoading={isLoading}>
                    Зарегистрироваться
                </Button>

                <span>
                    Есть аккаунт?{' '}
                    <Link onClick={onChangeType(AuthType.Login)}>Войти</Link>
                </span>
            </Footer>
        </Container>
    );
};

export default RegisterForm;
