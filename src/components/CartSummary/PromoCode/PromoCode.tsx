import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';

import { ApolloError } from '@apollo/client';
import {
    ApplyCouponInput,
    useApplyCouponMutation,
    useRemoveCouponsMutation,
} from '@graphql';

import {
    Container,
    Wrapper,
    Title,
    ApplyPromoCode,
    InputWrapper,
    Input,
    Button,
    Coupons,
    Coupon,
    DeleteCoupon,
} from './PromoCode.styled';

import { Sale } from '@icons/icons';

import { setCart } from '@redux/cart/actions';
import { getCartCoupons } from '@redux/cart/selectors';

interface IPromoCode {
    className?: string;
}

const PromoCode: React.FC<IPromoCode> = ({ className }) => {
    const dispatch = useDispatch();

    const coupons = useSelector(getCartCoupons);

    const [isPromoCode, setIsPromoCode] = useState(false);
    const [error, setError] = useState('');

    const { handleSubmit, control, setValue } = useForm<ApplyCouponInput>();

    const [applyCoupon, { loading }] = useApplyCouponMutation();

    const [deleteCoupon] = useRemoveCouponsMutation();

    const onSubmit: SubmitHandler<ApplyCouponInput> = async ({ code }) => {
        setError('');

        try {
            const response = await applyCoupon({
                variables: { input: { code: code.toLowerCase() } },
            });

            if (response.data?.applyCoupon?.cart) {
                dispatch(setCart(response.data.applyCoupon.cart));
                setValue('code', '');
            }
        } catch (e) {
            if ((e as ApolloError)?.graphQLErrors.length) {
                setError((e as ApolloError).graphQLErrors[0].message);
            }
        }
    };

    const onDeleteCoupon = (code: string) => async () => {
        try {
            const response = await deleteCoupon({
                variables: { input: { codes: [code] } },
            });

            if (response.data?.removeCoupons?.cart)
                dispatch(setCart(response.data.removeCoupons.cart));
        } catch (e) {
            if ((e as ApolloError)?.graphQLErrors.length) {
                setError((e as ApolloError).graphQLErrors[0].message);
            }
        }
    };

    return (
        <Container className={className} onSubmit={handleSubmit(onSubmit)}>
            <Sale />
            <Wrapper>
                <Title>Промокод</Title>

                <ApplyPromoCode onClick={() => setIsPromoCode(!isPromoCode)}>
                    {isPromoCode ? 'Скрыть' : 'Активировать'} промокод
                </ApplyPromoCode>

                {coupons && coupons.length > 0 && (
                    <Coupons>
                        {coupons.map((coupon, index) => (
                            <Coupon key={index}>
                                {coupon?.code}
                                <DeleteCoupon
                                    onClick={onDeleteCoupon(coupon?.code || '')}
                                />
                            </Coupon>
                        ))}
                    </Coupons>
                )}
            </Wrapper>

            {isPromoCode && (
                <InputWrapper>
                    <Input
                        name="code"
                        label="Промо код"
                        control={control}
                        rules={{
                            required: 'Обязательное поле',
                        }}
                        error={!!error.length}
                        helperText={error}
                    />
                    <Button type="submit" isLoading={loading}>
                        Применить
                    </Button>
                </InputWrapper>
            )}
        </Container>
    );
};

export default PromoCode;
