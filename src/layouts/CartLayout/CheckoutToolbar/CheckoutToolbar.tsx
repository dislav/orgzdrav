import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Switch, FormControlLabel, Tooltip } from '@mui/material';

import {
    SimpleProductFragment,
    useCheckoutMutation,
    useSubmitGfFormMutation,
    ViewerFragment,
} from '@graphql';

import { Container, Wrapper, AuthButton } from './CheckoutToolbar.styled';

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
    const [submitGfForm, { loading: submitGfLoading }] =
        useSubmitGfFormMutation();

    const onSubmitOrder = useCallback(
        async (user?: ViewerFragment) => {
            const userValues = {
                firstName: user?.firstName || profile?.firstName || '',
                lastName: user?.lastName || profile?.lastName || '',
                email: user?.email || profile?.email || '',
            };

            try {
                const response = await checkout({
                    variables: {
                        input: {
                            billing: {
                                firstName: userValues.firstName,
                                lastName: userValues.lastName,
                                email: userValues.email,
                            },
                            paymentMethod: 'bacs',
                        },
                    },
                });

                if (response.data?.checkout?.result === 'success') {
                    const formResponse = await submitGfForm({
                        variables: {
                            input: {
                                id: '1',
                                fieldValues: [
                                    {
                                        id: 1,
                                        emailValues: {
                                            value: userValues.email,
                                        },
                                    },
                                    {
                                        id: 2,
                                        nameValues: {
                                            first: userValues.firstName,
                                            last: userValues.lastName,
                                        },
                                    },
                                    {
                                        id: 6,
                                        value: response.data.checkout.order?.lineItems?.nodes
                                            ?.map(
                                                (item) =>
                                                    `• ${
                                                        (
                                                            item?.product as SimpleProductFragment
                                                        ).name
                                                    }`
                                            )
                                            .join('\n'),
                                    },
                                    {
                                        id: 4,
                                        emailValues: {
                                            value: 'v1.grigoriev@yandex.ru',
                                        },
                                    },
                                    {
                                        id: 5,
                                        value:
                                            response.data.checkout.order?.databaseId?.toString() ||
                                            '',
                                    },
                                ],
                            },
                        },
                    });

                    if (
                        response.data.checkout.order &&
                        formResponse.data?.submitGfForm
                    ) {
                        await router.push(
                            `/order-success/${response.data.checkout.order.databaseId}`
                        );

                        dispatch(addOrder(response.data.checkout.order));
                    }

                    if (user) {
                        await router.reload();
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        [profile, router, checkout, submitGfForm, dispatch]
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
                    isLoading={loading || submitGfLoading}
                    disabled={isUnavailablePrice}
                >
                    Оформить заказ
                </AuthButton>
            </Wrapper>
        </Container>
    );
};

export default CheckoutToolbar;
