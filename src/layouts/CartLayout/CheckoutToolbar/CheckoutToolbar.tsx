import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Switch, FormControlLabel, Tooltip } from '@mui/material';

import { ViewerProps } from '@graphql/fragments/viewer';

import { Container, Wrapper, AuthButton } from './CheckoutToolbar.styled';

import { useCheckoutMutation } from '@hooks/useCheckoutMutation';
import { useConfig } from '@context/configProvider';
import { getCartTotalPrice } from '@redux/cart/selectors';
import { getProfile } from '@redux/profile/selectors';
import { addOrder } from '@redux/orders/actions';

interface ICheckoutForm {
    className?: string;
}

const CheckoutToolbar: React.FC<ICheckoutForm> = ({ className }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const profile = useSelector(getProfile);

    const [isEntity, setIsEntity] = useState(false);

    const total = useSelector(getCartTotalPrice);

    const maxOrderPrice = useConfig().order.maxOrderPrice;
    const totalPrice = +total.replace(/\D+/gm, '');
    const isUnavailablePrice = isEntity && maxOrderPrice > totalPrice;

    const [checkout, { loading }] = useCheckoutMutation();

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
                    await router.push(
                        `/order-success/${response.data.checkout.order.databaseId}`
                    );

                    dispatch(addOrder(response.data.checkout.order));

                    if (user) {
                        await router.reload();
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        [profile, router, checkout, dispatch]
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsEntity(e.target.checked);
    };

    return (
        <Container className={className}>
            <Wrapper>
                <Tooltip
                    open={isUnavailablePrice}
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

                <AuthButton
                    onClick={onSubmitOrder}
                    onSuccessAuth={onSubmitOrder}
                    isLoading={loading}
                    disabled={isUnavailablePrice}
                >
                    Оформить заказ
                </AuthButton>
            </Wrapper>
        </Container>
    );
};

export default CheckoutToolbar;
