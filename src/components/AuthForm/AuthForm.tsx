import React, { useState } from 'react';

import { Container } from './AuthForm.styled';
import LoginForm from '@components/LoginForm/LoginForm';
import RegisterForm from '@components/RegisterForm/RegisterForm';

export enum AuthType {
    Login,
    Register,
}

const AuthForm: React.FC = () => {
    const [type, setType] = useState(AuthType.Login);

    return (
        <Container>
            {
                {
                    [AuthType.Login]: <LoginForm setType={setType} />,
                    [AuthType.Register]: <RegisterForm setType={setType} />,
                }[type]
            }
        </Container>
    );
};

export default AuthForm;
