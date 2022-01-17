import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { UnpackNestedValue } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
    CreateOrderMutation,
    CreateOrderMutationProps,
    CreateOrderMutationQueryProps,
} from '@graphql/mutations/createOrder';
import { ViewerProps } from '@graphql/fragments/viewer';
import { LoginMutationOptions } from '@graphql/mutations/login';
import { WebinarProps } from '@graphql/queries/webinar';

import {
    Container,
    ImageWrapper,
    Footer,
    Button,
} from './WebinarPreview.styled';
import ClientOnly from '@components/ClientOnly/ClientOnly';
import WebinarTime from '@layouts/WebinarLayout/WebinarTime/WebinarTime';
import AuthForm from '@components/AuthForm/AuthForm';
import Modal from '@components/Modal/Modal';

import { getIsLoggedIn, getProfile } from '@redux/profile/selectors';
import { useAuth } from '@hooks/useAuth';
import { useTogglable } from '@hooks/useTogglable';
import { useMutation } from '@apollo/client';

interface IWebinarPreview {
    className?: string;
    image: string;
    webinar: WebinarProps;
}

const WebinarPreview: React.FC<IWebinarPreview> = ({
    className,
    image,
    webinar,
}) => {
    const router = useRouter();

    const profile = useSelector(getProfile);
    const isLoggedIn = useSelector(getIsLoggedIn);

    const { onLogin, onRegister, isLoading } = useAuth();
    const { isOpen, onOpen, onClose } = useTogglable();

    const [createOrder, { loading }] = useMutation<
        CreateOrderMutationProps,
        CreateOrderMutationQueryProps
    >(CreateOrderMutation);

    const onSubmitOrder = useCallback(
        async (user?: ViewerProps) => {
            try {
                const response = await createOrder({
                    variables: {
                        input: {
                            billing: {
                                firstName:
                                    user?.firstName || profile?.firstName || '',
                                lastName:
                                    user?.lastName || profile?.lastName || '',
                                email: user?.email || profile?.email || '',
                            },
                            lineItems: [
                                {
                                    id: webinar.webinar.id,
                                    productId: webinar.webinar.databaseId,
                                    name: webinar.webinar.name,
                                    quantity: 1,
                                },
                            ],
                        },
                    },
                });

                if (response.data?.checkout.order) {
                    localStorage.setItem(
                        'authToken',
                        response.data.checkout.order.customer.jwtAuthToken
                    );

                    if (user) {
                        await router.reload();
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        [profile, webinar, createOrder, router]
    );

    const onClick = useCallback(() => {
        if (isLoggedIn) {
            onSubmitOrder();
        } else {
            onOpen();
        }
    }, [isLoggedIn, onSubmitOrder, onOpen]);

    const onLoginHandler = (data: UnpackNestedValue<LoginMutationOptions>) =>
        onLogin(data, onSubmitOrder);

    return (
        <Container className={className}>
            <ImageWrapper>
                <Image src={image} alt="" layout="fill" />
            </ImageWrapper>

            <Footer>
                <ClientOnly>
                    <WebinarTime time={webinar.time}>
                        <span>До трансляции</span>
                    </WebinarTime>
                </ClientOnly>

                <Button onClick={onClick} isLoading={isLoading || loading}>
                    Записаться
                </Button>
            </Footer>

            <Modal isOpen={isOpen} onClose={onClose}>
                <AuthForm onLogin={onLoginHandler} onRegister={onRegister} />
            </Modal>
        </Container>
    );
};

export default WebinarPreview;
