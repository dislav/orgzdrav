import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnpackNestedValue } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';

import { ViewerProps } from '@graphql/fragments/viewer';
import { LoginMutationOptions } from '@graphql/mutations/login';
import { WebinarProps } from '@graphql/queries/webinar';

import {
    Container,
    ImageWrapper,
    Footer,
    Button,
    Skeleton,
} from './WebinarPreview.styled';
import ClientOnly from '@components/ClientOnly/ClientOnly';
import WebinarTime from '@layouts/WebinarLayout/WebinarTime/WebinarTime';
import AuthForm from '@components/AuthForm/AuthForm';
import Modal from '@components/Modal/Modal';

import { useCreateOrderMutation } from '@hooks/useCreateOrderMutation';
import { getIsLoggedIn, getProfile } from '@redux/profile/selectors';
import { getIsOrdersLoading, getOrders } from '@redux/orders/selectors';
import { useAuth } from '@hooks/useAuth';
import { useTogglable } from '@hooks/useTogglable';
import { OrderStatusEnum } from '@graphql/fragments/order';
import { addOrder } from '@redux/orders/actions';

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
    const dispatch = useDispatch();

    const profile = useSelector(getProfile);
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isOrdersLoading = useSelector(getIsOrdersLoading);

    const orders = useSelector(getOrders);

    const isRecordedOnWebinar = useMemo(() => {
        return !!orders?.find((order) =>
            order.lineItems.nodes.some(
                (item) => item.product.id === webinar.webinar.id
            )
        );
    }, [webinar.webinar, orders]);

    const { onLogin, onRegister, isLoading } = useAuth();
    const { isOpen, onOpen, onClose } = useTogglable();

    const [createOrder, { loading }] = useCreateOrderMutation();

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
                                    productId: webinar.webinar.databaseId,
                                    name: webinar.webinar.name,
                                    quantity: 1,
                                },
                            ],
                            status: OrderStatusEnum.ON_HOLD,
                        },
                    },
                });

                if (response.data?.createOrder.order) {
                    dispatch(addOrder(response.data.createOrder.order));

                    if (user) {
                        await router.reload();
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        [profile, webinar, createOrder, router, dispatch]
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

    const showTime = dayjs(webinar.time).isAfter(dayjs());

    return (
        <Container className={className}>
            <ImageWrapper>
                <Image src={image} alt="" layout="fill" />
            </ImageWrapper>

            <Footer>
                {showTime && (
                    <ClientOnly>
                        <WebinarTime time={webinar.time}>
                            <span>До трансляции</span>
                        </WebinarTime>
                    </ClientOnly>
                )}

                {isOrdersLoading ? (
                    <Skeleton variant="rectangular" />
                ) : (
                    <Button
                        onClick={onClick}
                        isLoading={isLoading || loading}
                        disabled={!showTime || isRecordedOnWebinar}
                    >
                        {isRecordedOnWebinar
                            ? 'Успешно записаны'
                            : 'Записаться'}
                    </Button>
                )}
            </Footer>

            <Modal isOpen={isOpen} onClose={onClose}>
                <AuthForm onLogin={onLoginHandler} onRegister={onRegister} />
            </Modal>
        </Container>
    );
};

export default WebinarPreview;
