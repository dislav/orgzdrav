import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Layout from '@components/Layout/Layout';

export const Container = styled(Layout)`
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;
    padding: 30px 20px;

    ${up('sm')} {
        padding: 100px 0;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
`;
