import React, { useCallback } from 'react';
import { UnpackNestedValue } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { CustomerFragment, LoginInput } from '@graphql';
import { RegisterUserInputProps } from '@components/RegisterForm/types';

import { Modal, AuthForm, Button } from './AuthButton.styled';
import { IButton } from '@components/Button/Button';

import { useTogglable } from '@hooks/useTogglable';
import { getIsLoggedIn } from '@redux/customer/selectors';
import { useAuth } from '@hooks/useAuth';

interface IAuthButton extends IButton {
    renderButton?: (onClick?: React.DispatchWithoutAction) => React.ReactNode;
    onSuccessAuth?: (user: CustomerFragment) => Promise<void> | void;
    onClick?: React.DispatchWithoutAction;
}

const AuthButton: React.FC<IAuthButton> = ({
    children,
    renderButton,
    onSuccessAuth,
    onClick,
    isLoading,
    ...props
}) => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    const { isOpen, onOpen, onClose } = useTogglable();
    const {
        onLogin,
        onRegister,
        onPasswordReset,
        isLoading: loading,
    } = useAuth();

    const onClickHandler = useCallback(() => {
        if (isLoggedIn) {
            onClick?.();
        } else {
            onOpen();
        }
    }, [isLoggedIn, onClick, onOpen]);

    const onSuccessHandler = useCallback(
        (user: CustomerFragment) => {
            onClose();

            return onSuccessAuth?.(user);
        },
        [onClose, onSuccessAuth]
    );

    const onLoginHandler = useCallback(
        (data: UnpackNestedValue<LoginInput>) =>
            onLogin(data, onSuccessHandler),
        [onLogin, onSuccessHandler]
    );

    const onRegisterHandler = useCallback(
        (data: UnpackNestedValue<RegisterUserInputProps>) =>
            onRegister(data, onSuccessHandler),
        [onRegister, onSuccessHandler]
    );

    return (
        <>
            {renderButton ? (
                renderButton(onClickHandler)
            ) : (
                <Button
                    onClick={onClickHandler}
                    isLoading={isLoading || loading}
                    {...props}
                >
                    {children}
                </Button>
            )}

            <Modal isOpen={isOpen} onClose={onClose}>
                <AuthForm
                    onLogin={onLoginHandler}
                    onRegister={onRegisterHandler}
                    onRestore={onPasswordReset}
                />
            </Modal>
        </>
    );
};

export default AuthButton;
