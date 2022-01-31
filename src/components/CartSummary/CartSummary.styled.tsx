import styled from 'styled-components';
import { rgba } from 'polished';

import { Container as StyledCartProduct } from '@components/CartProduct/CartProduct.styled';
import PriceComponent from '@components/Price/Price';

export const Container = styled.div`
    position: relative;
`;

export const Products = styled.div`
    display: flex;
    flex-direction: column;

    ${StyledCartProduct} {
        border-bottom: 1px dashed ${({ theme }) => theme.colors.gray10};
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Price = styled(PriceComponent)`
    margin-left: auto;
`;

export const Loader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => rgba(theme.colors.white, 0.7)};
    z-index: 10;
`;
