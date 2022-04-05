import styled from 'styled-components';

import Layout from '@components/Layout/Layout';
import { up } from 'styled-breakpoints';

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
