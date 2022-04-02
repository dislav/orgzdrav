import styled from 'styled-components';
import { buttonClasses } from '@mui/material';

import PriceComponent from '@components/Price/Price';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.a`
    display: flex;

    &:nth-child(odd) {
        background: ${({ theme }) => theme.colors.gray05};
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 52px;
    height: 52px;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 6px 20px;
`;

export const Price = styled(PriceComponent)`
    display: flex;
    flex-direction: row-reverse;
    margin-left: auto;

    > span {
        margin-left: 12px;
    }
`;

export const Button = styled(ButtonComponent)`
    &.${buttonClasses.root} {
        min-width: 160px;
        height: 40px;
        margin-left: 20px;
    }
`;
