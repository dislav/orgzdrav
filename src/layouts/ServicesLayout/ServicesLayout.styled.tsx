import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Layout from '@components/Layout/Layout';

export const Container = styled(Layout)`
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;
    padding: 100px 0;
`;

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    ${up('sm')} {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }
`;
