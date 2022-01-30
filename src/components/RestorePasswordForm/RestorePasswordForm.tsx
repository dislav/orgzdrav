import React, { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { SendPasswordResetEmailInput } from '@graphql';
import { AuthType } from '@components/AuthForm/AuthForm';

import {
    Button,
    Container,
    FormErrors,
    Message,
    Footer,
    Input,
    Link,
} from './RestorePasswordForm.styled';

import { emailRegex } from '@constants/constants';

interface IRestorePasswordForm {
    className?: string;
    onSubmit: SubmitHandler<SendPasswordResetEmailInput>;
    setType: (type: AuthType) => void;
}

const RestorePasswordForm: React.FC<IRestorePasswordForm> = ({
    className,
    onSubmit,
    setType,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const { handleSubmit, control } = useForm<SendPasswordResetEmailInput>();

    const onSubmitHandler: SubmitHandler<SendPasswordResetEmailInput> =
        useCallback(
            async (data) => {
                setIsLoading(true);
                setErrorMessages([]);
                setIsSuccess(false);

                try {
                    const response = await onSubmit(data);

                    if (response?.status) {
                        setIsSuccess(true);
                    } else if (response?.errors)
                        setErrorMessages(response.errors);
                } catch (e) {
                    console.log(e);
                } finally {
                    setIsLoading(false);
                }
            },
            [onSubmit]
        );

    const onChangeType = (type: AuthType) => () => setType(type);

    return (
        <Container
            className={className}
            onSubmit={handleSubmit(onSubmitHandler)}
        >
            <Input
                name="username"
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

            {errorMessages.length > 0 && (
                <FormErrors messages={errorMessages} />
            )}

            {isSuccess && (
                <Message>
                    На указанную почту было выслано письмо с инструкциями по
                    восстановлению пароля.
                </Message>
            )}

            <Footer>
                <Button type="submit" isLoading={isLoading}>
                    Отправить
                </Button>

                <Link onClick={onChangeType(AuthType.Login)}>Назад</Link>
            </Footer>
        </Container>
    );
};

export default RestorePasswordForm;
