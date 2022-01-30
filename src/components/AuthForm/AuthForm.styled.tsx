import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px;

    ${up('md')} {
        width: 560px;
        border-radius: 10px;
        padding: 30px;
    }
`;
