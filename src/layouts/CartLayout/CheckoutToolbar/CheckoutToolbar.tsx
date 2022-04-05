import React, { useState, useCallback, useMemo } from 'react';
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
import { getCartProducts, getCartTotalPrice } from '@redux/cart/selectors';
import { getProfile } from '@redux/profile/selectors';
import { addOrder } from '@redux/orders/actions';

interface ICheckoutForm {
    className?: string;
}

const CheckoutToolbar: React.FC<ICheckoutForm> = ({ className }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const {
        global: { defaultEmail, ymCode },
        order: { maxOrderPrice },
    } = useConfig();

    const profile = useSelector(getProfile);

    const [isEntity, setIsEntity] = useState(false);

    const cartProducts = useSelector(getCartProducts);
    const total = useSelector(getCartTotalPrice);

    const productsByEmails = useMemo(() => {
        const cartProductMap = new Map<string, SimpleProductFragment[]>();

        cartProducts.forEach((product) => {
            const simpleProduct = product?.product
                ?.node as SimpleProductFragment;
            const email = simpleProduct.productAdditional?.mail || defaultEmail;

            cartProductMap.has(email)
                ? cartProductMap.set(email, [
                      ...(cartProductMap.get(email) || []),
                      simpleProduct,
                  ])
                : cartProductMap.set(email, [simpleProduct]);
        });

        return Array.from(cartProductMap);
    }, [cartProducts, defaultEmail]);

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
                    // @ts-ignore
                    ym(ymCode, 'reachGoal', 'CHECKOUT', {
                        order_id: response.data?.checkout?.order?.databaseId,
                    });

                    await Promise.all([
                        productsByEmails.map(([email, products]) =>
                            submitGfForm({
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
                                                value: products
                                                    .map(
                                                        (product) =>
                                                            `• ${product.name}`
                                                    )
                                                    .join('\n'),
                                            },
                                            {
                                                id: 4,
                                                emailValues: {
                                                    value: email,
                                                },
                                            },
                                            {
                                                id: 5,
                                                value:
                                                    response?.data?.checkout?.order?.databaseId?.toString() ||
                                                    '',
                                            },
                                        ],
                                    },
                                },
                            })
                        ),
                    ]);

                    if (response.data.checkout.order) {
                        await router.push(
                            `/order-success/${response.data.checkout.order.databaseId}`
                        );

                        dispatch(addOrder(response.data.checkout.order));
                    }

                    await router.reload();
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
