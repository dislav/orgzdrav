import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import dayjs from 'dayjs';

import { ViewerProps } from '@graphql/fragments/viewer';
import { WebinarProps } from '@graphql/queries/webinar';
import { OrderStatusEnum } from '@graphql/fragments/order';

import {
    Container,
    ImageWrapper,
    Footer,
    AuthButton,
    Skeleton,
} from './WebinarPreview.styled';
import WebinarTime from '@layouts/WebinarLayout/WebinarTime/WebinarTime';
import ClientOnly from '@components/ClientOnly/ClientOnly';

import { getProfile } from '@redux/profile/selectors';
import { getIsOrdersLoading, getOrders } from '@redux/orders/selectors';
import { addOrder } from '@redux/orders/actions';
import { useOrderLazyQuery } from '@hooks/useOrdersQuery';
import { useCreateOrderMutation } from '@hooks/useCreateOrderMutation';

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
    const isOrdersLoading = useSelector(getIsOrdersLoading);

    const orders = useSelector(getOrders);

    const isRecordedOnWebinar = useMemo(() => {
        return !!orders?.find((order) =>
            order.lineItems.nodes.some(
                (item) => item.product.id === webinar.webinar.id
            )
        );
    }, [webinar.webinar, orders]);

    const [fetchOrders, { loading: ordersLoading }] = useOrderLazyQuery();
    const [createOrder, { loading }] = useCreateOrderMutation();

    const onSubmitOrder = useCallback(
        async (user?: ViewerProps) => {
            try {
                const orders = await fetchOrders();

                const findOrder =
                    orders?.data?.orders?.nodes?.find((order) =>
                        order.lineItems.nodes.some(
                            (item) =>
                                item.productId === webinar.webinar.databaseId
                        )
                    ) || null;

                if (!findOrder) {
                    const response = await createOrder({
                        variables: {
                            input: {
                                billing: {
                                    firstName:
                                        user?.firstName ||
                                        profile?.firstName ||
                                        '',
                                    lastName:
                                        user?.lastName ||
                                        profile?.lastName ||
                                        '',
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

                    if (response.data?.createOrder.order)
                        dispatch(addOrder(response.data.createOrder.order));
                }

                if (user) await router.reload();
            } catch (e) {
                console.log(e);
            }
        },
        [router, profile, webinar, createOrder, fetchOrders, dispatch]
    );

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

                <ClientOnly>
                    {isOrdersLoading ? (
                        <Skeleton variant="rectangular" />
                    ) : (
                        <AuthButton
                            onClick={onSubmitOrder}
                            onSuccessAuth={onSubmitOrder}
                            isLoading={loading || ordersLoading}
                            disabled={!showTime || isRecordedOnWebinar}
                        >
                            {isRecordedOnWebinar
                                ? 'Успешно записаны'
                                : 'Записаться'}
                        </AuthButton>
                    )}
                </ClientOnly>
            </Footer>
        </Container>
    );
};

export default WebinarPreview;
