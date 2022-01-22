import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    ${up('md')} {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    ${up('xl')} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const File = styled.a`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
`;

export const FileIcon = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    margin-right: 20px;

    svg {
        width: 40%;
        height: 40%;
    }
`;

export const FileContent = styled.div`
    display: flex;
    flex-direction: column;

    span {
        margin-bottom: 4px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
