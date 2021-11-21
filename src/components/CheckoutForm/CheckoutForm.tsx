import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import {
    CheckoutMutation,
    CheckoutMutationProps,
    CheckoutMutationQueryProps,
} from '@graphql/mutations/checkout';
import { ViewerProps } from '@graphql/fragments/viewer';

import { emailRegex } from '@constants/constants';
import { Container, Group, Input, Button } from './CheckoutForm.styled';

interface ICheckoutForm {
    className?: string;
    profile?: ViewerProps;
}

const CheckoutForm: React.FC<ICheckoutForm> = ({ className, profile }) => {
    const router = useRouter();

    console.log(profile);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<CheckoutMutationQueryProps['input']['billing']>({
        defaultValues: {
            firstName: profile?.firstName || '',
            lastName: profile?.lastName || '',
            email: profile?.email || '',
        },
    });

    const [checkout, { loading }] = useMutation<
        CheckoutMutationProps,
        CheckoutMutationQueryProps
    >(CheckoutMutation);

    const onSubmit: SubmitHandler<
        CheckoutMutationQueryProps['input']['billing']
    > = async (data) => {
        try {
            const response = await checkout({
                variables: {
                    input: { billing: data, paymentMethod: 'bacs' },
                },
            });

            if (response.data?.checkout.result === 'success') {
                localStorage.setItem(
                    'authToken',
                    response.data.checkout.order.customer.jwtAuthToken
                );

                await router.push(`/orders/${response.data.checkout.order.id}`);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container className={className} onSubmit={handleSubmit(onSubmit)}>
            <Group>
                <Input
                    label="Имя"
                    name="firstName"
                    register={register}
                    options={{ required: 'Обязательное поле' }}
                    error={errors.firstName?.message}
                />
                <Input
                    label="Фамилия"
                    name="lastName"
                    register={register}
                    options={{ required: 'Обязательное поле' }}
                    error={errors.lastName?.message}
                />
            </Group>

            <Input
                label="Город"
                name="city"
                register={register}
                options={{ required: 'Обязательное поле' }}
                error={errors.city?.message}
            />

            <Group>
                <Input
                    label="E-mail"
                    name="email"
                    register={register}
                    options={{
                        required: 'Обязательное поле',
                        pattern: {
                            value: emailRegex,
                            message: 'Неверный формат почты',
                        },
                    }}
                    error={errors.email?.message}
                />
                <Input
                    label="Телефон"
                    name="phone"
                    register={register}
                    options={{ required: 'Обязательное поле' }}
                    error={errors.phone?.message}
                />
            </Group>

            <Input label="Компания" name="company" register={register} />

            <Button isLoading={loading}>Оформить заказ</Button>
        </Container>
    );
};

export default CheckoutForm;
