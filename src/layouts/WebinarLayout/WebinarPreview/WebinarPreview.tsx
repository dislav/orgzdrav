import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';

import {
    OrderStatusEnum,
    SimpleProductFragment,
    useCreateOrderMutation,
    useGetOrdersLazyQuery,
    useSubmitGfFormMutation,
    ViewerFragment,
} from '@graphql';

import {
    Container,
    ImageWrapper,
    Title,
    Description,
    Footer,
    AuthButton,
    Skeleton,
    Date,
    Controls,
    Button,
} from './WebinarPreview.styled';
import ClientOnly from '@components/ClientOnly/ClientOnly';
import Image from '@components/Image/Image';

import { getProfile } from '@redux/profile/selectors';
import { getIsOrdersLoading, getOrders } from '@redux/orders/selectors';
import { addOrder } from '@redux/orders/actions';
import { useConfig } from '@context/configProvider';

interface IWebinarPreview {
    className?: string;
    webinar: SimpleProductFragment;
}

const WebinarPreview: React.FC<IWebinarPreview> = ({ className, webinar }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const profile = useSelector(getProfile);
    const isOrdersLoading = useSelector(getIsOrdersLoading);

    const { defaultEmail } = useConfig().global;

    const orders = useSelector(getOrders);

    const isRecordedOnWebinar = useMemo(() => {
        return !!orders?.find((order) =>
            order?.lineItems?.nodes?.some(
                (item) =>
                    (item?.product as SimpleProductFragment).id === webinar.id
            )
        );
    }, [webinar, orders]);

    const [createOrder, { loading }] = useCreateOrderMutation();
    const [fetchOrders, { loading: ordersLoading }] = useGetOrdersLazyQuery();
    const [submitGfForm, { loading: submitGfLoading }] =
        useSubmitGfFormMutation();

    const onSubmitOrder = useCallback(
        async (user?: ViewerFragment) => {
            const userValues = {
                firstName: user?.firstName || profile?.firstName || '',
                lastName: user?.lastName || profile?.lastName || '',
                email: user?.email || profile?.email || '',
            };

            try {
                const orders = await fetchOrders();

                const findOrder =
                    orders?.data?.orders?.nodes?.find((order) =>
                        order?.lineItems?.nodes?.some(
                            (item) => item?.productId === webinar.databaseId
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
                                        productId: webinar.databaseId,
                                        name: webinar.name,
                                        quantity: 1,
                                    },
                                ],
                                status: OrderStatusEnum.OnHold,
                            },
                        },
                    });

                    await submitGfForm({
                        variables: {
                            input: {
                                id: '1',
                                fieldValues: [
                                    {
                                        id: 1,
                                        emailValues: {
                                            value: userValues.email,
                                        },
                                    },
                                    {
                                        id: 2,
                                        nameValues: {
                                            first: userValues.firstName,
                                            last: userValues.lastName,
                                        },
                                    },
                                    {
                                        id: 6,
                                        value: webinar.name,
                                    },
                                    {
                                        id: 4,
                                        emailValues: {
                                            value:
                                                webinar.productAdditional
                                                    ?.mail || defaultEmail,
                                        },
                                    },
                                    {
                                        id: 5,
                                        value:
                                            response?.data?.createOrder?.order?.databaseId?.toString() ||
                                            '',
                                    },
                                ],
                            },
                        },
                    });

                    if (response.data?.createOrder?.order)
                        dispatch(addOrder(response.data.createOrder.order));
                }

                if (user) await router.reload();
            } catch (e) {
                console.log(e);
            }
        },
        [router, profile, webinar, createOrder, fetchOrders, dispatch]
    );

    const onDownloadProgram = () => {
        if (webinar.productAdditional?.programm?.mediaItemUrl)
            router.push(webinar.productAdditional.programm.mediaItemUrl);
    };

    const showTime =
        webinar.productAdditional?.broadcastDate &&
        dayjs(webinar.productAdditional.broadcastDate).isAfter(dayjs());

    return (
        <Container className={className}>
            {webinar.image?.sourceUrl && (
                <ImageWrapper>
                    <Image
                        src={webinar.image.sourceUrl}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                    />
                </ImageWrapper>
            )}

            <Footer>
                {webinar.name && <Title>{webinar.name}</Title>}

                {webinar.shortDescription && (
                    <Description
                        dangerouslySetInnerHTML={{
                            __html: webinar.shortDescription,
                        }}
                    />
                )}

                {webinar.productAdditional?.broadcastDate && (
                    <Date>
                        Начало трансляции{' '}
                        {dayjs(webinar.productAdditional.broadcastDate).format(
                            'DD.MM.YYYY, HH:mm'
                        )}
                    </Date>
                )}

                <Controls>
                    {webinar.productAdditional?.programm?.mediaItemUrl && (
                        <Button onClick={onDownloadProgram}>Программа</Button>
                    )}

                    <ClientOnly>
                        {isOrdersLoading ? (
                            <Skeleton variant="rectangular" />
                        ) : (
                            <AuthButton
                                onClick={onSubmitOrder}
                                onSuccessAuth={onSubmitOrder}
                                isLoading={
                                    loading || ordersLoading || submitGfLoading
                                }
                                disabled={!showTime || isRecordedOnWebinar}
                            >
                                {isRecordedOnWebinar
                                    ? 'Записаны'
                                    : 'Записаться'}
                            </AuthButton>
                        )}
                    </ClientOnly>
                </Controls>
            </Footer>
        </Container>
    );
};

export default WebinarPreview;
