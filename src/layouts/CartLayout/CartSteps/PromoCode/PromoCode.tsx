import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { ApolloError, useMutation } from '@apollo/client';
import {
    ApplyCouponMutation,
    ApplyCouponMutationProps,
    ApplyCouponMutationQueryProps,
} from '@graphql/mutations/applyCoupon';
import { CouponProps } from '@graphql/queries/cart';

import {
    Container,
    Wrapper,
    Title,
    ApplyPromoCode,
    InputWrapper,
    Input,
    Button,
} from './PromoCode.styled';

import { Sale } from '@icons/icons';

interface IPromoCode {
    className?: string;
    coupons: CouponProps[];
    onAddPromoCode?: () => void;
}

const PromoCode: React.FC<IPromoCode> = ({
    className,
    coupons,
    onAddPromoCode,
}) => {
    const [isPromoCode, setIsPromoCode] = useState(false);
    const [error, setError] = useState('');

    console.log(coupons);

    const { handleSubmit, register } =
        useForm<ApplyCouponMutationQueryProps['input']>();

    const [applyCoupon, { loading }] = useMutation<
        ApplyCouponMutationProps,
        ApplyCouponMutationQueryProps
    >(ApplyCouponMutation);

    const onSubmit: SubmitHandler<ApplyCouponMutationQueryProps['input']> =
        async (data) => {
            setError('');

            try {
                const response = await applyCoupon({
                    variables: { input: data },
                });

                if (response.data?.applyCoupon) {
                    onAddPromoCode?.();
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
                    coupons?.map((coupon) => (
                        <span key={coupon.code}>{coupon.code}</span>
                    ))
                ) : (
                    <ApplyPromoCode
                        onClick={() => setIsPromoCode(!isPromoCode)}
                    >
                        {isPromoCode ? 'Скрыть' : 'Активировать'} промокод
                    </ApplyPromoCode>
                )}
            </Wrapper>

            {isPromoCode && (
                <InputWrapper>
                    <Input name="code" register={register} error={error} />
                    <Button isLoading={loading}>Применить</Button>
                </InputWrapper>
            )}
        </Container>
    );
};

export default PromoCode;
