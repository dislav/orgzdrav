import styled from 'styled-components';

import Layout from '@components/Layout/Layout';
import PriceComponent from '@components/Price/Price';
import { Container as StyledSearchForm } from '@components/SearchForm/SearchForm.styled';

export const Container = styled(Layout)`
    ${StyledSearchForm} {
        margin-bottom: 40px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 60px;
`;

export const ImageWrapper = styled.div`
    width: 54%;
`;

export const ImageCover = styled.div`
    position: relative;
    padding-top: 36%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 42%;
    margin-left: auto;

    h2 {
        color: ${({ theme }) => theme.colors.white};
        font-size: 26px;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 14px;
    }
`;

export const Categories = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 14px;

    span {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 14px;
        font-weight: 700;
        line-height: 1.2;
        background: ${({ theme }) => theme.colors.white};
        border-radius: 4px;
        margin-right: 10px;
        margin-bottom: 4px;
        padding: 2px 6px;

        &:last-child {
            margin-right: 0;
        }
    }
`;

export const Price = styled(PriceComponent)`
    color: ${({ theme }) => theme.colors.white};
    margin-top: auto;
`;
