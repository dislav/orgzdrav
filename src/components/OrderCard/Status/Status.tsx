import React from 'react';

import { OrderStatusEnum } from '@graphql/fragments/order';

import { Container } from './Status.styled';

interface IStatus {
    className?: string;
    status: OrderStatusEnum;
}

const Status: React.FC<IStatus> = ({ className, status }) => {
    const orderStatus = {
        [OrderStatusEnum.COMPLETED]: 'Выполнен',
        [OrderStatusEnum.CANCELLED]: 'Отменен',
        [OrderStatusEnum.FAILED]: 'Не удался',
        [OrderStatusEnum.ON_HOLD]: 'На удержании',
        [OrderStatusEnum.PROCESSING]: 'Обработка',
        [OrderStatusEnum.PENDING]: 'Ожидает оплаты',
        [OrderStatusEnum.REFUNDED]: 'Возвращен',
    };

    return (
        <Container className={className} status={status}>
            {orderStatus[status]}
        </Container>
    );
};

export default Status;
