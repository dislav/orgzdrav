import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

import AuthForm from '@components/AuthForm/AuthForm';
import { useAuth } from '@hooks/useAuth';
import { LoginMutationOptions } from '@graphql/mutations/login';
import { RegisterUserMutationInputs } from '@components/RegisterForm/RegisterForm';

interface IAuthModal {
    className?: string;
}

const AuthModal: React.FC<IAuthModal> = ({ className }) => {
    const router = useRouter();

    const reloadPage = async () => {
        await router.reload();
    };

    const { onLogin, onRegister } = useAuth();

    const onLoginHandler: SubmitHandler<LoginMutationOptions> = (data) =>
        onLogin(data, reloadPage);

    const onRegisterHandler: SubmitHandler<RegisterUserMutationInputs> = (
        data
    ) => onRegister(data, reloadPage);

    return (
        <AuthForm
            className={className}
            onLogin={onLoginHandler}
            onRegister={onRegisterHandler}
        />
    );
};

export default AuthModal;
