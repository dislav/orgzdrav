import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { buttonClasses } from '@mui/material';

import PriceComponent from '@components/Price/Price';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.a`
    display: flex;
    flex-direction: column;

    ${up('md')} {
        flex-direction: row;
    }

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
    flex-direction: column;
    padding: 8px 12px;

    ${up('md')} {
        flex-direction: row;
        align-items: center;
        padding: 8px 20px;
    }
`;

export const Title = styled.div`
    margin-bottom: 16px;

    ${up('md')} {
        max-width: 65%;
        margin-bottom: 0;
    }
`;

export const Price = styled(PriceComponent)`
    display: flex;
    margin-bottom: 12px;

    ${up('md')} {
        flex-direction: row-reverse;
        margin-left: auto;
        margin-bottom: 0;
    }

    > span {
        margin-right: 12px;

        ${up('md')} {
            margin-right: 0;
            margin-left: 12px;
        }
    }
`;

export const Button = styled(ButtonComponent)`
    &.${buttonClasses.root} {
        min-width: 160px;
        height: 40px;

        ${up('md')} {
            margin-left: 20px;
        }
    }
`;
