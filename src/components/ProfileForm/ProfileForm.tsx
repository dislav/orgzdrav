import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import { UpdateUserInputProps } from '@graphql/mutations/updateUser';

import { Container, Input, Button } from './ProfileForm.styled';
import { useUpdateUserMutation } from '@hooks/useUpdateUserMutation';
import { getProfile } from '@redux/profile/selectors';

interface IProfileForm {
    className?: string;
}

const ProfileForm: React.FC<IProfileForm> = ({ className }) => {
    const router = useRouter();

    const profile = useSelector(getProfile);
    const { firstName, lastName, email } = profile;

    const { handleSubmit, register } = useForm<UpdateUserInputProps['input']>({
        defaultValues: {
            firstName,
            lastName,
            email,
        },
    });

    const [updateUser, { loading }] = useUpdateUserMutation();

    const onSubmit: SubmitHandler<UpdateUserInputProps['input']> = async (
        data
    ) => {
        try {
            const response = await updateUser({
                variables: { input: { ...data, id: profile.id } },
            });

            if (response.data?.updateUser.user) {
                await router.push('/profile');
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container className={className} onSubmit={handleSubmit(onSubmit)}>
            <Input label="Имя" name="firstName" register={register} />
            <Input label="Фамилия" name="lastName" register={register} />
            <Input label="E-mail" name="email" register={register} />

            <Button onClick={() => router.push('/profile')}>Назад</Button>

            <Button type="submit" isLoading={loading}>
                Сохранить
            </Button>
        </Container>
    );
};

export default ProfileForm;
