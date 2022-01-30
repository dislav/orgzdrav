import styled from 'styled-components';
import { OrderStatusEnum } from '@graphql';

export const Container = styled.div<{ status: OrderStatusEnum }>`
    display: flex;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme, status }) =>
        ({
            [OrderStatusEnum.Completed]: theme.colors.green,
            [OrderStatusEnum.Cancelled]: theme.colors.purple,
            [OrderStatusEnum.Cancelled]: theme.colors.red,
            [OrderStatusEnum.OnHold]: theme.colors.orange,
            [OrderStatusEnum.Processing]: theme.colors.green,
            [OrderStatusEnum.Pending]: theme.colors.purple,
            [OrderStatusEnum.Refunded]: theme.colors.green,
            [OrderStatusEnum.Failed]: theme.colors.red,
        }[status])};
    border-radius: 4px;
    padding: 4px 10px;
    margin-left: auto;
`;
