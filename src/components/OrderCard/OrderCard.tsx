import React from 'react';

import { OrderFragment, SimpleProductFragment } from '@graphql';

import {
    Container,
    Header,
    Number,
    Group,
    GroupTitle,
    GroupDescription,
    AccordionSummary,
    AccordionDetails,
    Products,
    Documents,
} from './OrderCard.styled';
import Document from '@components/OrderCard/Document/Document';
import Product from '@components/OrderCard/Product/Product';
import Status from '@components/OrderCard/Status/Status';
import Accordion from '@layouts/CatalogLayout/Accordion/Accordion';

const OrderCard: React.FC<OrderFragment> = ({
    databaseId,
    total,
    status,
    downloadableItems,
    lineItems,
}) => {
    return (
        <Container>
            <Header>
                <Number>
                    Заказ #{databaseId} —{' '}
                    {total && (
                        <span dangerouslySetInnerHTML={{ __html: total }} />
                    )}
                </Number>
                {status && <Status status={status} />}
            </Header>

            {lineItems?.nodes && lineItems.nodes.length > 0 && (
                <Group>
                    <GroupTitle>Товары в заказе</GroupTitle>
                    <Products>
                        {lineItems.nodes.map((product, index) => (
                            <Product
                                key={index}
                                {...(product?.product as SimpleProductFragment)}
                            />
                        ))}
                    </Products>
                </Group>
            )}

            {downloadableItems?.nodes && downloadableItems.nodes.length > 0 && (
                <Group>
                    <Accordion
                        summary={
                            <AccordionSummary>
                                Доступные материалы
                            </AccordionSummary>
                        }
                        details={
                            <AccordionDetails>
                                <GroupDescription>
                                    Некоторые пакеты документов могут иметь
                                    ограничения на количество загрузок и срок
                                    действия
                                </GroupDescription>
                                <Documents>
                                    {downloadableItems.nodes.map(
                                        (file, index) => (
                                            <Document key={index} {...file} />
                                        )
                                    )}
                                </Documents>
                            </AccordionDetails>
                        }
                    />
                </Group>
            )}
        </Container>
    );
};

export default OrderCard;
