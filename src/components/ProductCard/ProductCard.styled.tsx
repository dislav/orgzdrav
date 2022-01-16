import styled from 'styled-components';
import { rgba } from 'polished';

import ButtonComponent from '@components/Button/Button';

export const Container = styled.a`
    display: flex;
    flex-direction: column;

    h2 {
        color: ${({ theme }) => rgba(theme.colors.white, 0.6)};
        font-size: 14px;
        line-height: 1.4;
        margin-bottom: 6px;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    padding-top: 100%;
    margin-bottom: 12px;
    border-radius: 4px;
    overflow: hidden;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        background-color: ${({ theme }) => rgba(theme.colors.black, 0.2)};
        transition: opacity 0.15s;
        z-index: 1;
    }

    &:hover:after {
        opacity: 1;
    }
`;

export const Button = styled(ButtonComponent)`
    && {
        height: 40px;
        margin-top: auto;
    }
`;

export const Price = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    line-height: 1;
    font-weight: 700;
    margin-bottom: 20px;
`;
