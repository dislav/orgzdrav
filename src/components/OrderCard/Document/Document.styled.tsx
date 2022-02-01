import styled from 'styled-components';
import { Button } from '@mui/material';

export const Container = styled(Button)`
    && {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.gray05};
        border: 2px solid ${({ theme }) => theme.colors.gray15};
        border-radius: 6px;
        cursor: pointer;
        overflow: hidden;
        padding: 0 0 16px;

        & > svg {
            width: 50%;
            height: 50%;
        }

        &:hover {
            background: ${({ theme }) => theme.colors.gray15};
        }
    }
`;

export const TooltipContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Ext = styled.span`
    position: absolute;
    left: 0;
    bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const VideoModal = styled.div`
    min-width: 80vw;
`;
