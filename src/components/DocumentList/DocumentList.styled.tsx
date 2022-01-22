import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import ButtonComponent from '@components/Button/Button';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    ${up('md')} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Document = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    padding: 16px;
`;

export const DocumentContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const DocumentDescription = styled.div`
    font-size: 14px;
    margin-top: 10px;
`;

export const Button = styled(ButtonComponent)`
    && {
        height: 40px;
    }
`;
