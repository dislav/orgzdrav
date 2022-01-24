import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    ${up('xl')} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
