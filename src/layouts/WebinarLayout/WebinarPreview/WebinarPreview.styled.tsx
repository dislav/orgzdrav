import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Skeleton as SkeletonComponent } from '@mui/material';

import AuthButtonComponent from '@components/AuthButton/AuthButton';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-top: 36%;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
`;

export const Title = styled.span`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 10px;
`;

export const Description = styled.div`
    font-size: 14px;
    margin-bottom: 20px;
`;

export const Date = styled.span`
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    margin-bottom: 12px;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0 0 4px 4px;
    padding: 14px;
`;

export const Controls = styled.div`
    display: flex;
    flex-direction: column;

    ${up('xl')} {
        align-items: center;
        flex-direction: row;
    }
`;

export const Button = styled(ButtonComponent)`
    && {
        flex: 1;
        height: 40px;
        color: ${({ theme }) => theme.colors.black};
        background: ${({ theme }) => theme.colors.gray15};
        margin-bottom: 8px;

        &:hover {
            background: ${({ theme }) => theme.colors.gray10};
        }

        ${up('xl')} {
            margin-right: 10px;
            margin-bottom: 0;
        }
    }
`;

export const AuthButton = styled(AuthButtonComponent)`
    && {
        flex: 1;
        height: 40px;
    }
`;

export const Skeleton = styled(SkeletonComponent)`
    && {
        flex: 1;
        height: 40px;
        border-radius: 4px;

        ${up('xl')} {
            margin-left: auto;
        }
    }
`;
