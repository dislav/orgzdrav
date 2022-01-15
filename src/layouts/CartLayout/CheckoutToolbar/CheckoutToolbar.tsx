import React, { useState, useCallback } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Switch, FormControlLabel, Tooltip } from '@mui/material';

import {
    CheckoutMutation,
    CheckoutMutationProps,
    CheckoutMutationQueryProps,
} from '@graphql/mutations/checkout';

import { Container, Button, Wrapper, Controls } from './CheckoutToolbar.styled';
import Modal from '@components/Modal/Modal';
import { useTogglable } from '@hooks/useTogglable';
import AuthForm from '@components/AuthForm/AuthForm';
import {
    LoginMutation,
    LoginMutationOptions,
    LoginMutationProps,
} from '@graphql/mutations/login';
import {
    RegisterUserMutation,
    RegisterUserMutationProps,
    RegisterUserMutationQueryProps,
} from '@graphql/mutations/registerUser';
import { ViewerProps } from '@graphql/fragments/viewer';
import { RegisterUserMutationInputs } from '@components/RegisterForm/RegisterForm';
import { useConfig } from '@context/configProvider';

interface ICheckoutForm {
    className?: string;
    profile?: ViewerProps;
    total: string;
}

const CheckoutToolbar: React.FC<ICheckoutForm> = ({
    className,
    profile,
    total,
}) => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useTogglable();

    const [isEntity, setIsEntity] = useState(false);

    const maxOrderPrice = useConfig().order.maxOrderPrice;
    const totalPrice = +total.replace(/\D+/gm, '');
    const isUnavailablePrice = isEntity && maxOrderPrice > totalPrice;

    const [checkout, { loading }] = useMutation<
        CheckoutMutationProps,
        CheckoutMutationQueryProps
    >(CheckoutMutation);

    const [login] = useMutation<LoginMutationProps, LoginMutationOptions>(
        LoginMutation
    );

    const [registerUser] = useMutation<
        RegisterUserMutationProps,
        RegisterUserMutationQueryProps
    >(RegisterUserMutation);

    const onSubmitOrder = useCallback(
        async (fromLogin?: boolean) => {
            try {
                const response = await checkout({
                    variables: {
                        input: {
                            billing: {
                                firstName: profile?.firstName || '',
                                lastName: profile?.lastName || '',
                                email: profile?.email || '',
                            },
                            paymentMethod: 'bacs',
                        },
                    },
                });

                if (response.data?.checkout.result === 'success') {
                    localStorage.setItem(
                        'authToken',
                        response.data.checkout.order.customer.jwtAuthToken
                    );

                    await router.push(
                        `/orders/${response.data.checkout.order.id}`
                    );

                    if (fromLogin) {
                        await router.reload();
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        [profile, checkout, router]
    );

    const onLogin: SubmitHandler<LoginMutationOptions> = useCallback(
        async (data) => {
            try {
                const response = await login({ variables: data });

                if (response.data?.login) {
                    localStorage.setItem(
                        'authToken',
                        response.data.login.authToken
                    );

                    await onSubmitOrder(true);
                }
            } catch (e) {
                const errors = (e as ApolloError)?.graphQLErrors.map(
                    ({ message }) => message
                );

                if (errors)
                    return {
                        errors,
                    };
            }
        },
        [login, onSubmitOrder]
    );

    const onRegister: SubmitHandler<RegisterUserMutationInputs> = useCallback(
        async (data) => {
            try {
                const { confirmPassword, ...input } = data;

                const response = await registerUser({
                    variables: { input },
                });

                if (response.data?.registerUser) {
                    localStorage.setItem(
                        'authToken',
                        response.data.registerUser.user.jwtAuthToken
                    );

                    await router.reload();
                }
            } catch (e) {
                const errors = (e as ApolloError)?.graphQLErrors.map(
                    ({ message }) => message
                );

                if (errors)
                    return {
                        errors,
                    };
            }
        },
        [registerUser, router]
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsEntity(e.target.checked);
    };

    const onClick = () => {
        if (profile?.username) {
            onSubmitOrder();
        } else {
            onOpen();
        }
    };

    return (
        <Container className={className}>
            <Wrapper>
                <Controls>
                    <Tooltip
                        title="Минимальныая сумма заказа для юр. лиц составляет 10 000 ₽"
                        placement="top"
                    >
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={isEntity}
                                    onChange={onChange}
                                />
                            }
                            label="Юридическое лицо"
                        />
                    </Tooltip>
                </Controls>

                <Button
                    isLoading={loading}
                    disabled={isUnavailablePrice}
                    onClick={onClick}
                >
                    Оформить заказ
                </Button>
            </Wrapper>

            <Modal isOpen={isOpen} onClose={onClose}>
                <AuthForm onLogin={onLogin} onRegister={onRegister} />
            </Modal>
        </Container>
    );
};

export default CheckoutToolbar;
