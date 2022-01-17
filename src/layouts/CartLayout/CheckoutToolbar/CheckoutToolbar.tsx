import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { UnpackNestedValue } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { Switch, FormControlLabel, Tooltip } from '@mui/material';

import {
    CheckoutMutation,
    CheckoutMutationProps,
    CheckoutMutationQueryProps,
} from '@graphql/mutations/checkout';
import { ViewerProps } from '@graphql/fragments/viewer';
import { LoginMutationOptions } from '@graphql/mutations/login';

import { Container, Button, Wrapper } from './CheckoutToolbar.styled';
import Modal from '@components/Modal/Modal';
import AuthForm from '@components/AuthForm/AuthForm';

import { useTogglable } from '@hooks/useTogglable';
import { useAuth } from '@hooks/useAuth';
import { useConfig } from '@context/configProvider';
import { getCartTotalPrice } from '@redux/cart/selectors';

interface ICheckoutForm {
    className?: string;
    profile?: ViewerProps;
}

const CheckoutToolbar: React.FC<ICheckoutForm> = ({ className, profile }) => {
    const router = useRouter();

    const { isOpen, onOpen, onClose } = useTogglable();
    const { onLogin, onRegister } = useAuth();

    const [isEntity, setIsEntity] = useState(false);

    const total = useSelector(getCartTotalPrice);

    const maxOrderPrice = useConfig().order.maxOrderPrice;
    const totalPrice = +total.replace(/\D+/gm, '');
    const isUnavailablePrice = isEntity && maxOrderPrice > totalPrice;

    const [checkout, { loading }] = useMutation<
        CheckoutMutationProps,
        CheckoutMutationQueryProps
    >(CheckoutMutation);

    const onSubmitOrder = useCallback(
        async (user?: ViewerProps) => {
            try {
                const response = await checkout({
                    variables: {
                        input: {
                            billing: {
                                firstName:
                                    user?.firstName || profile?.firstName || '',
                                lastName:
                                    user?.lastName || profile?.lastName || '',
                                email: user?.email || profile?.email || '',
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

                    if (user) {
                        await router.reload();
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        [profile, checkout, router]
    );

    const onLoginHandler = (data: UnpackNestedValue<LoginMutationOptions>) =>
        onLogin(data, onSubmitOrder);

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
                <Tooltip
                    title="Минимальныая сумма заказа для юр. лиц составляет 10 000 ₽"
                    placement="top"
                >
                    <FormControlLabel
                        control={
                            <Switch checked={isEntity} onChange={onChange} />
                        }
                        label="Юридическое лицо"
                    />
                </Tooltip>

                <Button
                    isLoading={loading}
                    disabled={isUnavailablePrice}
                    onClick={onClick}
                >
                    Оформить заказ
                </Button>
            </Wrapper>

            <Modal isOpen={isOpen} onClose={onClose}>
                <AuthForm onLogin={onLoginHandler} onRegister={onRegister} />
            </Modal>
        </Container>
    );
};

export default CheckoutToolbar;
