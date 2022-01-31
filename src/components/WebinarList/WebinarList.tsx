import React, { useMemo } from 'react';
import dayjs from 'dayjs';

import { SimpleProductFragment } from '@graphql';

import {
    Container,
    Title,
    NewBroadcasts,
    OldBroadcasts,
} from './WebinarList.styled';
import WebinarPreview from '@layouts/WebinarLayout/WebinarPreview/WebinarPreview';
import ProductCard from '@components/ProductCard/ProductCard';
import EmptyList from '@components/EmptyList/EmptyList';

enum WebinarEnum {
    New,
    Old,
}

interface IWebinarList {
    className?: string;
    webinars: SimpleProductFragment[];
}

const WebinarList: React.FC<IWebinarList> = ({ className, webinars }) => {
    const webinarsByTypes = useMemo(() => {
        const webinarsMap = new Map<WebinarEnum, SimpleProductFragment[]>();

        webinars.forEach((webinar) => {
            const key = webinar.productAdditional?.broadcastDate
                ? dayjs().isBefore(webinar.productAdditional.broadcastDate)
                    ? WebinarEnum.New
                    : WebinarEnum.Old
                : WebinarEnum.Old;

            webinarsMap.has(key)
                ? webinarsMap.set(key, [
                      ...(webinarsMap.get(key) || []),
                      webinar,
                  ])
                : webinarsMap.set(key, [webinar]);
        });

        return webinarsMap;
    }, [webinars]);

    return (
        <Container className={className}>
            {webinarsByTypes.size ? (
                <>
                    {webinarsByTypes.get(WebinarEnum.New) && (
                        <>
                            <Title>Предстоящие вебинары</Title>
                            <NewBroadcasts>
                                {webinarsByTypes
                                    .get(WebinarEnum.New)
                                    ?.map((webinar, index) => (
                                        <WebinarPreview
                                            key={index}
                                            webinar={webinar}
                                        />
                                    ))}
                            </NewBroadcasts>
                        </>
                    )}

                    {webinarsByTypes.get(WebinarEnum.Old) && (
                        <>
                            <Title>Записанные вебинары</Title>
                            <OldBroadcasts>
                                {webinarsByTypes
                                    .get(WebinarEnum.Old)
                                    ?.map((webinar, index) => (
                                        <ProductCard key={index} {...webinar} />
                                    ))}
                            </OldBroadcasts>
                        </>
                    )}
                </>
            ) : (
                <EmptyList>Список вебинаров пуст</EmptyList>
            )}
        </Container>
    );
};

export default WebinarList;
