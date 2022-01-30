import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ResetPasswordInputs } from '@components/NewPasswordForm/types';

import { Container, Input, Button } from './NewPasswordForm.styled';

interface INewPasswordForm {
    className?: string;
    onSubmit: SubmitHandler<ResetPasswordInputs>;
    isLoading?: boolean;
}

const NewPasswordForm: React.FC<INewPasswordForm> = ({
    className,
    onSubmit,
    isLoading,
}) => {
    const { handleSubmit, control, watch } = useForm<ResetPasswordInputs>();

    const password = watch('password', '');

    return (
        <Container className={className} onSubmit={handleSubmit(onSubmit)}>
            <p>Придумайте новый пароль</p>

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
                placeholder="Подтверждение пароля"
                type="password"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                    validate: (value) =>
                        value === password || 'Пароли не совпадают',
                }}
            />

            <Button type="submit" isLoading={isLoading}>
                Отправить
            </Button>
        </Container>
    );
};

export default NewPasswordForm;
