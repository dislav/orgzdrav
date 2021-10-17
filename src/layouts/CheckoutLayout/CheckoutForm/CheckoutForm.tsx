import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import {
    CheckoutMutation,
    CheckoutMutationProps,
    CheckoutMutationQueryProps,
} from '@graphql/mutations/checkout';

import { emailRegex } from '@constants/constants';
import { Container, Group, Input, Button } from './CheckoutForm.styled';

const CheckoutForm: React.FC = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<CheckoutMutationQueryProps['input']['billing']>();

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

            console.log(response);
        } catch (e) {}
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
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
