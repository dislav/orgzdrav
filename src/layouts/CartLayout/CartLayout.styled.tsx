import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Layout from '@components/Layout/Layout';
import { Container as StyledSpinner } from '@components/Spinner/Spinner.styled';
import { Container as StyledCartSummary } from '@components/CartSummary/CartSummary.styled';

export const Container = styled(Layout)`
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px 100px;

    ${up('md')} {
        padding: 80px 40px;
    }

    ${up('xl')} {
        padding: 100px 0;
    }

    ${StyledSpinner} {
        color: ${({ theme }) => theme.colors.white};
    }

    ${StyledCartSummary} {
        margin-bottom: 40px;
    }
`;
