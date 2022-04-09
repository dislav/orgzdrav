import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { buttonClasses } from '@mui/material';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 20px;

    ${up('md')} {
        align-items: center;
        flex-direction: row;
    }

    :nth-child(odd) {
        background: ${({ theme }) => theme.colors.gray05};
    }

    .${buttonClasses.root} {
        ${up('md')} {
            margin-left: auto;
        }
    }
`;

export const Icon = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    padding-bottom: 14px;
    margin-bottom: 8px;

    ${up('md')} {
        margin-right: 14px;
        margin-bottom: 0;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 75%;
    margin-bottom: 10px;

    ${up('md')} {
        flex: auto;
        margin-bottom: 0;
    }
`;

export const Availability = styled.div<{ limit?: boolean }>`
    display: flex;
    flex-direction: column;
    color: ${({ theme, limit }) =>
        limit ? theme.colors.red : theme.colors.black};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 4px;

    ${up('md')} {
        align-items: center;
        flex-direction: row;

        span:not(:last-child):after {
            content: '•';
            margin: 0 6px;
        }
    }
`;

export const Ext = styled.span`
    position: absolute;
    left: 50%;
    bottom: 0;
    font-size: 12px;
    font-weight: 700;
    line-height: 0.8;
    text-transform: uppercase;
    transform: translateX(-50%);
`;

export const VideoModal = styled.div`
    min-width: 80vw;
`;
