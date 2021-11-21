import React from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import { ViewerProps } from '@graphql/fragments/viewer';
import {
    UpdateUserInputProps,
    UpdateUserMutation,
    UpdateUserMutationProps,
} from '@graphql/mutations/updateUser';
import { Container, Input, Button } from './ProfileForm.styled';

interface IProfileForm {
    className?: string;
    profile: ViewerProps;
}

const ProfileForm: React.FC<IProfileForm> = ({ className, profile }) => {
    const router = useRouter();
    const { firstName, lastName, email } = profile;

    const { handleSubmit, register } = useForm<UpdateUserInputProps['input']>({
        defaultValues: {
            firstName,
            lastName,
            email,
        },
    });

    const [updateUser, { loading }] = useMutation<
        UpdateUserMutationProps,
        UpdateUserInputProps
    >(UpdateUserMutation);

    const onSubmit: SubmitHandler<UpdateUserInputProps['input']> = async (
        data
    ) => {
        try {
            const response = await updateUser({
                variables: { input: { ...data, id: profile.id } },
            });

            if (response.data?.updateUser.user) {
                router.push('/profile');
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

            <Button isLoading={loading}>Сохранить</Button>
        </Container>
    );
};

export default ProfileForm;
