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
    CustomerFragment,
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

import {
    getCustomer,
    getCustomerLoading,
    getCustomerOrders,
} from '@redux/customer/selectors';
import { useConfig } from '@context/configProvider';
import { addCustomerOrder } from '@redux/customer/actions';

interface IWebinarPreview {
    className?: string;
    webinar: SimpleProductFragment;
}

const WebinarPreview: React.FC<IWebinarPreview> = ({ className, webinar }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const customer = useSelector(getCustomer);
    const orders = useSelector(getCustomerOrders);
    const isCustomerLoading = useSelector(getCustomerLoading);

    const { defaultEmail } = useConfig().global;

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
        async (user?: CustomerFragment) => {
            const userValues = {
                firstName: user?.firstName || customer?.firstName || '',
                lastName: user?.lastName || customer?.lastName || '',
                email: user?.email || customer?.email || '',
                phone: user?.billing?.phone || customer?.billing?.phone || '',
                company:
                    user?.billing?.company || customer?.billing?.company || '',
                city: user?.billing?.city || customer?.billing?.city || '',
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
                                    firstName: userValues.firstName,
                                    lastName: userValues.lastName,
                                    email: userValues.email,
                                    phone: userValues.phone,
                                    company: userValues.company,
                                    city: userValues.city,
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
                                    {
                                        id: 7,
                                        value: userValues.phone,
                                    },
                                ],
                            },
                        },
                    });

                    if (response.data?.createOrder?.order)
                        dispatch(
                            addCustomerOrder(response.data.createOrder.order)
                        );
                }

                if (user) await router.reload();
            } catch (e) {
                console.log(e);
            }
        },
        [router, customer, webinar, createOrder, fetchOrders, dispatch]
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
                        {isCustomerLoading ? (
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
