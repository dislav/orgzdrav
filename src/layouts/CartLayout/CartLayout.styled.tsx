import styled from 'styled-components';

import Layout from '@components/Layout/Layout';
import { Container as StyledSpinner } from '@components/Spinner/Spinner.styled';
import { Container as StyledCartSummary } from '@components/CartSummary/CartSummary.styled';

export const Container = styled(Layout)`
    max-width: 1100px;
    margin: 80px auto 160px;
    
    ${StyledSpinner} {
        color: ${({ theme }) => theme.colors.white};
    }

    ${StyledCartSummary} {
        margin-bottom: 40px;
    }
`;
