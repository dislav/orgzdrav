import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';

import { UpdateCustomerInput, useUpdateCustomerMutation } from '@graphql';

import { Container, Footer, Button } from './ProfileForm.styled';
import Input from '@components/Input/Input';

import { getCustomer } from '@redux/customer/selectors';
import { setCustomer } from '@redux/customer/actions';
import { TextField } from '@mui/material';

interface IProfileForm {
    className?: string;
}

const ProfileForm: React.FC<IProfileForm> = ({ className }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const customer = useSelector(getCustomer);

    const { handleSubmit, control } = useForm<UpdateCustomerInput>({
        defaultValues: {
            firstName: customer?.firstName || '',
            lastName: customer?.lastName || '',
            billing: {
                phone: customer?.billing?.phone || '',
                company: customer?.billing?.company || '',
                city: customer?.billing?.city || '',
            },
        },
    });

    const [updateCustomer, { loading }] = useUpdateCustomerMutation();

    const onSubmit: SubmitHandler<UpdateCustomerInput> = async (data) => {
        try {
            const response = await updateCustomer({
                variables: { input: { ...data, id: customer.id } },
            });

            if (response.data?.updateCustomer?.customer) {
                await router.push('/profile');

                dispatch(setCustomer(response.data.updateCustomer.customer));
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container className={className} onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Имя"
                name="firstName"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                }}
            />

            <Input
                label="Фамилия"
                name="lastName"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                }}
            />

            <Controller
                name="billing.phone"
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <NumberFormat
                        customInput={TextField}
                        format="+7 (###) ###-####"
                        mask="_"
                        error={!!error}
                        helperText={error?.message || ''}
                        {...field}
                    />
                )}
                rules={{
                    required: 'Обязательное поле',
                }}
            />

            <Input label="Компания" name="billing.company" control={control} />
            <Input label="Город" name="billing.city" control={control} />

            <Footer>
                <Button onClick={() => router.push('/profile')}>Назад</Button>

                <Button type="submit" isLoading={loading}>
                    Сохранить
                </Button>
            </Footer>
        </Container>
    );
};

export default ProfileForm;
