import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import { UpdateUserInput, useUpdateUserMutation } from '@graphql';

import { Container, Input, Footer, Button } from './ProfileForm.styled';
import { getProfile } from '@redux/profile/selectors';
import { setProfile } from '@redux/profile/actions';

interface IProfileForm {
    className?: string;
}

const ProfileForm: React.FC<IProfileForm> = ({ className }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const profile = useSelector(getProfile);
    const { id, firstName, lastName } = profile;

    const { handleSubmit, control } = useForm<UpdateUserInput>({
        defaultValues: {
            firstName,
            lastName,
        },
    });

    const [updateUser, { loading }] = useUpdateUserMutation();

    const onSubmit: SubmitHandler<UpdateUserInput> = async (data) => {
        try {
            const response = await updateUser({
                variables: { input: { ...data, id } },
            });

            if (response.data?.updateUser?.user) {
                await router.push('/profile');

                dispatch(setProfile(response.data.updateUser.user));
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container className={className} onSubmit={handleSubmit(onSubmit)}>
            <Input label="Имя" name="firstName" control={control} />
            <Input label="Фамилия" name="lastName" control={control} />

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
