import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Layout from '@components/Layout/Layout';
import { Container as StyledStockCard } from '@components/StockCard/StockCard.styled';

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

export const List = styled.div`
    display: flex;
    flex-direction: column;

    ${StyledStockCard} {
        margin-bottom: 40px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
