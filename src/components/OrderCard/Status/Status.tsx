import React from 'react';

import { OrderStatusEnum } from '@graphql';

import { Container } from './Status.styled';

interface IStatus {
    className?: string;
    status: OrderStatusEnum;
}

const Status: React.FC<IStatus> = ({ className, status }) => {
    const orderStatus = {
        [OrderStatusEnum.Completed]: 'Выполнен',
        [OrderStatusEnum.Cancelled]: 'Отменен',
        [OrderStatusEnum.Failed]: 'Не удался',
        [OrderStatusEnum.OnHold]: 'На удержании',
        [OrderStatusEnum.Processing]: 'Обработка',
        [OrderStatusEnum.Pending]: 'Ожидает оплаты',
        [OrderStatusEnum.Refunded]: 'Возвращен',
    };

    return (
        <Container className={className} status={status}>
            {orderStatus[status]}
        </Container>
    );
};

export default Status;
