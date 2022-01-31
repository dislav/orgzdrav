import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { rgba } from 'polished';

import ButtonComponent from '@components/Button/Button';

export const Container = styled.a`
    display: flex;
    flex-direction: column;
`;

export const ImageWrapper = styled.div`
    position: relative;
    padding-top: 36%;
    border-radius: 4px 4px 0 0;
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

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0 0 4px 4px;
    padding: 8px;

    ${up('md')} {
        padding: 14px;
    }
`;

export const Title = styled.h2`
    width: 100%;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 13px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;

    ${up('md')} {
        font-size: 16px;
    }
`;

export const Description = styled.div`
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 20px;
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;

    ${up('md')} {
        align-items: center;
        flex-direction: row;
    }
`;

export const Button = styled(ButtonComponent)`
    && {
        height: 46px;
        margin-top: 10px;

        ${up('md')} {
            margin-left: auto;
            margin-top: 0;
        }

        &:only-child {
            flex: 1;
        }
    }
`;
