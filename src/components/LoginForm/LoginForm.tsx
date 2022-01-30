import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LoginInput } from '@graphql';
import { AuthType } from '@components/AuthForm/AuthForm';

import {
    Container,
    Input,
    FormErrors,
    Footer,
    Button, Link,
} from "./LoginForm.styled"

interface ILoginForm {
    setType: (type: AuthType) => void;
    onSubmit: SubmitHandler<LoginInput>;
}

const LoginForm: React.FC<ILoginForm> = ({ setType, onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    const { handleSubmit, control } = useForm<LoginInput>();

    const onSubmitHandler: SubmitHandler<LoginInput> = async (data) => {
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
                name="password"
                type="password"
                label="Пароль"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                }}
            />

            {errorMessages?.length > 0 && (
                <FormErrors messages={errorMessages} />
            )}

            <Footer>
                <Button type="submit" isLoading={isLoading}>
                    Войти
                </Button>

                <span>
                    Нет аккаунта?{' '}
                    <Link onClick={onChangeType(AuthType.Register)}>
                        Зарегистрироваться
                    </Link>
                </span>

                <Link onClick={onChangeType(AuthType.Restore)}>
                    Забыли пароль?
                </Link>
            </Footer>
        </Container>
    );
};

export default LoginForm;
