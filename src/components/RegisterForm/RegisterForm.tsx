import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { RegisterUserMutationQueryProps } from '@graphql/mutations/registerUser';
import { AuthType } from '@components/AuthForm/AuthForm';

import { emailRegex } from '@constants/constants';
import { Container, Input, Button } from './RegisterForm.styled';
import FormErrors from '@components/FormErrors/FormErrors';

interface IRegisterForm {
    setType: (type: AuthType) => void;
    onSubmit: SubmitHandler<RegisterUserMutationInputs>;
}

export type RegisterUserMutationInputs =
    RegisterUserMutationQueryProps['input'] & {
        confirmPassword: string;
    };

const RegisterForm: React.FC<IRegisterForm> = ({ setType, onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<RegisterUserMutationInputs>();

    const password = watch('password', '');

    const onSubmitHandler: SubmitHandler<RegisterUserMutationInputs> = async (
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

            <Button type="submit" isLoading={isLoading}>
                Зарегистрироваться
            </Button>

            <p>
                Есть аккаунт?{' '}
                <span onClick={onChangeType(AuthType.Login)}>Войти</span>
            </p>
        </Container>
    );
};

export default RegisterForm;
