import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { LoginMutationOptions } from '@graphql/mutations/login';

import { Container } from './AuthForm.styled';
import LoginForm from '@components/LoginForm/LoginForm';
import RegisterForm, {
    RegisterUserMutationInputs,
} from '@components/RegisterForm/RegisterForm';

export enum AuthType {
    Login,
    Register,
}

interface IAuthForm {
    className?: string;
    authType?: AuthType;
    onLogin: SubmitHandler<LoginMutationOptions>;
    onRegister: SubmitHandler<RegisterUserMutationInputs>;
}

const AuthForm: React.FC<IAuthForm> = ({
    className,
    authType = AuthType.Login,
    onLogin,
    onRegister,
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
                }[type]
            }
        </Container>
    );
};

export default AuthForm;
