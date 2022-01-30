import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { LoginInput, SendPasswordResetEmailInput } from '@graphql';
import { RegisterUserInputProps } from '@components/RegisterForm/types';

import { Container } from './AuthForm.styled';
import LoginForm from '@components/LoginForm/LoginForm';
import RegisterForm from '@components/RegisterForm/RegisterForm';
import RestorePasswordForm from '@components/RestorePasswordForm/RestorePasswordForm';

export enum AuthType {
    Login,
    Register,
    Restore,
}

interface IAuthForm {
    className?: string;
    authType?: AuthType;
    onLogin: SubmitHandler<LoginInput>;
    onRegister: SubmitHandler<RegisterUserInputProps>;
    onRestore: SubmitHandler<SendPasswordResetEmailInput>;
}

const AuthForm: React.FC<IAuthForm> = ({
    className,
    authType = AuthType.Login,
    onLogin,
    onRegister,
    onRestore,
}) => {
    const [type, setType] = useState(authType);

    return (
        <Container className={className}>
            {
                {
                    [AuthType.Login]: (
                        <LoginForm setType={setType} onSubmit={onLogin} />
                    ),
                    [AuthType.Register]: (
                        <RegisterForm setType={setType} onSubmit={onRegister} />
                    ),
                    [AuthType.Restore]: (
                        <RestorePasswordForm
                            setType={setType}
                            onSubmit={onRestore}
                        />
                    ),
                }[type]
            }
        </Container>
    );
};

export default AuthForm;
