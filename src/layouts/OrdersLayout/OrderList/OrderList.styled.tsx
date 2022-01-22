import styled from 'styled-components';

import { Container as StyledOrderCard } from '@components/OrderCard/OrderCard.styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    ${StyledOrderCard} {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
