import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LoginMutationOptions } from '@graphql/mutations/login';
import { AuthType } from '@components/AuthForm/AuthForm';

import { Container, Input, Button } from './LoginForm.styled';
import FormErrors from '@components/FormErrors/FormErrors';

interface ILoginForm {
    setType: (type: AuthType) => void;
    onSubmit: SubmitHandler<LoginMutationOptions>;
}

const LoginForm: React.FC<ILoginForm> = ({ setType, onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginMutationOptions>();

    const onSubmitHandler: SubmitHandler<LoginMutationOptions> = async (
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

            <Button type="submit" isLoading={isLoading}>
                Войти
            </Button>

            <p>
                Нет аккаунта?{' '}
                <span onClick={onChangeType(AuthType.Register)}>
                    Зарегистрироваться
                </span>
            </p>
        </Container>
    );
};

export default LoginForm;
