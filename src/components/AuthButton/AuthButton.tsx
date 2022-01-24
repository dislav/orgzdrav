import React, { useCallback } from 'react';
import { UnpackNestedValue } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { LoginMutationOptions } from '@graphql/mutations/login';
import { RegisterUserMutationInputs } from '@components/RegisterForm/RegisterForm';
import { ViewerProps } from '@graphql/fragments/viewer';

import Button, { IButton } from '@components/Button/Button';
import Modal from '@components/Modal/Modal';
import AuthForm from '@components/AuthForm/AuthForm';

import { useTogglable } from '@hooks/useTogglable';
import { getIsLoggedIn } from '@redux/profile/selectors';
import { useAuth } from '@hooks/useAuth';

interface IAuthButton extends IButton {
    renderButton?: (onClick?: React.DispatchWithoutAction) => React.ReactNode;
    onSuccessAuth?: (user: ViewerProps) => Promise<void> | void;
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
    const { onLogin, onRegister, isLoading: loading } = useAuth();

    const onClickHandler = useCallback(() => {
        if (isLoggedIn) {
            onClick?.();
        } else {
            onOpen();
        }
    }, [isLoggedIn, onClick, onOpen]);

    const onSuccessHandler = useCallback(
        (user: ViewerProps) => {
            onClose();

            return onSuccessAuth?.(user);
        },
        [onClose, onSuccessAuth]
    );

    const onLoginHandler = useCallback(
        (data: UnpackNestedValue<LoginMutationOptions>) =>
            onLogin(data, onSuccessHandler),
        [onLogin, onSuccessHandler]
    );

    const onRegisterHandler = useCallback(
        (data: UnpackNestedValue<RegisterUserMutationInputs>) =>
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
                />
            </Modal>
        </>
    );
};

export default AuthButton;
