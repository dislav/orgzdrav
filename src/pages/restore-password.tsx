import React, { useEffect, useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

import { useResetUserPasswordMutation } from '@graphql';

import Layout from '@components/Layout/Layout';
import NewPasswordForm from '@components/NewPasswordForm/NewPasswordForm';
import { ResetPasswordInputs } from '@components/NewPasswordForm/types';

const RestorePassword: React.FC = () => {
    const router = useRouter();

    const [resetPassword, { loading }] = useResetUserPasswordMutation();

    const onResetPassword: SubmitHandler<ResetPasswordInputs> = useCallback(
        async (data) => {
            try {
                const response = await resetPassword({
                    variables: {
                        input: {
                            key: router.query?.key as string,
                            login: router.query?.login as string,
                            password: data?.password,
                        },
                    },
                });

                if (response.data?.resetUserPassword?.user?.jwtAuthToken) {
                    localStorage.setItem(
                        'authToken',
                        response.data.resetUserPassword.user.jwtAuthToken
                    );

                    await router.push('/');
                }
            } catch (e) {
                console.log(e);
            }
        },
        [resetPassword, router]
    );

    useEffect(() => {
        if (router.isReady && (!router.query?.key || !router.query?.login))
            router.push('/');
    }, [router]);

    return (
        <Layout
            meta={{
                title: 'Восстановление пароля',
            }}
        >
            <NewPasswordForm onSubmit={onResetPassword} isLoading={loading} />
        </Layout>
    );
};

export default RestorePassword;
