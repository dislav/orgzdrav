import styled from 'styled-components';

import { Container as StyledProduct } from '@components/OrderCard/Product/Product.styled';

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
`;

export const GroupTitle = styled.div`
    color: ${({ theme }) => theme.colors.black};
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const GroupDescription = styled.div`
    display: block;
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: 700;
    padding: 0 20px;
    margin-bottom: 20px;
`;

export const AccordionSummary = styled.span`
    color: ${({ theme }) => theme.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
`;

export const AccordionDetails = styled.div`
    padding-top: 8px;
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
    flex-direction: column;
`;
