import styled from 'styled-components';

import { OrderStatusEnum } from '@graphql/fragments/order';

export const Container = styled.div<{ status: OrderStatusEnum }>`
    display: flex;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme, status }) =>
        ({
            [OrderStatusEnum.COMPLETED]: theme.colors.green,
            [OrderStatusEnum.CANCELLED]: theme.colors.purple,
            [OrderStatusEnum.FAILED]: theme.colors.red,
            [OrderStatusEnum.ON_HOLD]: theme.colors.orange,
            [OrderStatusEnum.PROCESSING]: theme.colors.green,
            [OrderStatusEnum.PENDING]: theme.colors.purple,
            [OrderStatusEnum.REFUNDED]: theme.colors.green,
        }[status])};
    border-radius: 4px;
    padding: 4px 10px;
    margin-left: auto;
`;
