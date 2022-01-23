import React from 'react';

import { OrderProps } from '@graphql/fragments/order';
import {
    Container,
    Header,
    Number,
    Group,
    Grid,
    Cell,
    Products,
    Documents,
    Row,
} from './OrderCard.styled';
import Document from '@components/OrderCard/Document/Document';
import Product from '@components/OrderCard/Product/Product';
import Status from '@components/OrderCard/Status/Status';

const OrderCard: React.FC<OrderProps> = ({
    databaseId,
    total,
    status,
    billing,
    hasDownloadableItem,
    downloadableItems,
    lineItems,
}) => {
    return (
        <Container>
            <Header>
                <Number>
                    Заказ #{databaseId} —{' '}
                    <span dangerouslySetInnerHTML={{ __html: total }} />
                </Number>
                <Status status={status} />
            </Header>

            <Group>
                <Grid>
                    {billing?.email && (
                        <Row>
                            <Cell>E-mail</Cell>
                            <Cell>{billing.email}</Cell>
                        </Row>
                    )}

                    {billing?.phone && (
                        <Row>
                            <Cell>Телефон</Cell>
                            <Cell>{billing.phone}</Cell>
                        </Row>
                    )}
                </Grid>
            </Group>

            {lineItems.nodes.length > 0 && (
                <Group>
                    <span>Товары в заказе</span>
                    <Products>
                        {lineItems.nodes.map((product) => (
                            <Product
                                key={product.productId}
                                {...product.product}
                            />
                        ))}
                    </Products>
                </Group>
            )}

            {hasDownloadableItem && downloadableItems.nodes.length > 0 && (
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
