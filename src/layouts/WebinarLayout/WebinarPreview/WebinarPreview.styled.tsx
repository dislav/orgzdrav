import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Skeleton as SkeletonComponent } from '@mui/material';

import { Container as StyledWebinarTime } from '@layouts/WebinarLayout/WebinarTime/WebinarTime.styled';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    ${StyledWebinarTime} {
        display: flex;
        flex-direction: column-reverse;
        color: ${({ theme }) => theme.colors.black};
        border-radius: 4px;
        margin-bottom: 14px;
        z-index: 10;

        ${up('xl')} {
            margin-bottom: 0;
        }

        span {
            font-size: 14px;
            margin-bottom: 8px;
        }
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0 0 8px 8px;
    padding: 14px;

    ${up('xl')} {
        align-items: center;
        flex-direction: row;
        padding: 20px;
    }
`;

export const Button = styled(ButtonComponent)`
    && {
        height: 40px;

        ${up('xl')} {
            margin-left: auto;
        }
    }
`;

export const Skeleton = styled(SkeletonComponent)`
    && {
        min-width: 120px;
        height: 40px;
        border-radius: 4px;

        ${up('xl')} {
            margin-left: auto;
        }
    }
`;
