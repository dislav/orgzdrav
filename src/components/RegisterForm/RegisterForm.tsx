import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { AuthType } from '@components/AuthForm/AuthForm';
import { RegisterUserInputProps } from '@components/RegisterForm/types';

import {
    Container,
    Input,
    FormErrors,
    Footer,
    Button,
    Link,
} from './RegisterForm.styled';

import { useConfig } from "@context/configProvider"

interface IRegisterForm {
    setType: (type: AuthType) => void;
    onSubmit: SubmitHandler<RegisterUserInputProps>;
}

const RegisterForm: React.FC<IRegisterForm> = ({ setType, onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    const emailRegex = useConfig().regex.email;

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
