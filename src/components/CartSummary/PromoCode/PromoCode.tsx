import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { ApolloError, useMutation } from '@apollo/client';
import {
    ApplyCouponMutation,
    ApplyCouponMutationProps,
    ApplyCouponMutationQueryProps,
} from '@graphql/mutations/applyCoupon';
import {
    RemoveCouponsMutation,
    RemoveCouponsMutationProps,
    RemoveCouponsMutationQueryProps,
} from '@graphql/mutations/removeCoupons';

import { CouponProps } from '@graphql/queries/cart';

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

interface IPromoCode {
    className?: string;
    coupons: CouponProps[];
    onUpdateCart?: () => void;
}

const PromoCode: React.FC<IPromoCode> = ({
    className,
    coupons,
    onUpdateCart,
}) => {
    const [isPromoCode, setIsPromoCode] = useState(false);
    const [error, setError] = useState('');

    const { handleSubmit, register } =
        useForm<ApplyCouponMutationQueryProps['input']>();

    const [applyCoupon, { loading }] = useMutation<
        ApplyCouponMutationProps,
        ApplyCouponMutationQueryProps
    >(ApplyCouponMutation);

    const [deleteCoupon] = useMutation<
        RemoveCouponsMutationProps,
        RemoveCouponsMutationQueryProps
    >(RemoveCouponsMutation);

    const onSubmit: SubmitHandler<ApplyCouponMutationQueryProps['input']> =
        async ({ code }) => {
            setError('');

            try {
                const response = await applyCoupon({
                    variables: { input: { code: code.toLowerCase() } },
                });

                if (response.data?.applyCoupon) {
                    onUpdateCart?.();
                }
            } catch (e) {
                if ((e as ApolloError)?.graphQLErrors.length) {
                    setError((e as ApolloError).graphQLErrors[0].message);
                }
            }
        };

    const onDeleteCoupon = async (code: string) => {
        try {
            const response = await deleteCoupon({
                variables: { input: { codes: [code] } },
            });

            if (response.data?.removeCoupons) {
                onUpdateCart?.();
            }
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

                {coupons.length > 0 ? (
                    <Coupons>
                        {coupons?.map((coupon) => (
                            <Coupon key={coupon.code}>
                                {coupon.code}
                                <DeleteCoupon
                                    onClick={() => onDeleteCoupon(coupon.code)}
                                />
                            </Coupon>
                        ))}
                    </Coupons>
                ) : (
                    <ApplyPromoCode
                        onClick={() => setIsPromoCode(!isPromoCode)}
                    >
                        {isPromoCode ? 'Скрыть' : 'Активировать'} промокод
                    </ApplyPromoCode>
                )}
            </Wrapper>

            {isPromoCode && coupons.length === 0 && (
                <InputWrapper>
                    <Input name="code" register={register} error={error} />
                    <Button isLoading={loading}>Применить</Button>
                </InputWrapper>
            )}
        </Container>
    );
};

export default PromoCode;
