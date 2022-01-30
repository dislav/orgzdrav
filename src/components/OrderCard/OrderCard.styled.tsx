import styled from 'styled-components';

import { Container as StyledProduct } from '@components/OrderCard/Product/Product.styled';
import { Container as StyledDocument } from '@components/OrderCard/Document/Document.styled';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.gray10};
    padding: 20px;
`;

export const Number = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.gray10};
    padding: 20px;

    &:last-child {
        border-bottom: none;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
    }
`;

export const Grid = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    padding: 12px;

    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.colors.gray05};
    }
`;

export const Cell = styled.div`
    flex: 1;
    padding-right: 20px;

    &:last-child {
        padding-right: 0;
    }
`;

export const Products = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${StyledProduct} {
        margin-right: 13px;

        &:nth-child(7n) {
            margin-right: 0;
        }
    }
`;

export const Documents = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${StyledDocument} {
        width: 146px;
        margin-right: 12px;
    }
`;
