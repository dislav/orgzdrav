import React from 'react';

import { OrderFragment, SimpleProductFragment } from '@graphql';

import {
    Container,
    Header,
    Number,
    Group,
    Products,
    Documents,
} from './OrderCard.styled';
import Document from '@components/OrderCard/Document/Document';
import Product from '@components/OrderCard/Product/Product';
import Status from '@components/OrderCard/Status/Status';

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
                    <span>Товары в заказе</span>
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
                    <span>Доступные материалы</span>
                    <Documents>
                        {downloadableItems.nodes.map((file, index) => (
                            <Document key={index} {...file} />
                        ))}
                    </Documents>
                </Group>
            )}
        </Container>
    );
};

export default OrderCard;
