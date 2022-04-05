import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Layout from '@components/Layout/Layout';

export const Container = styled(Layout)`
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;
    padding: 40px 20px;

    ${up('md')} {
        padding: 8px 40px;
    }

    ${up('xl')} {
        padding: 100px 0;
    }
`;
