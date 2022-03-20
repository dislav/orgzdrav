import styled from 'styled-components';

import ButtonComponent from '@components/Button/Button';

export const Container = styled.a`
    display: flex;
    align-items: center;
    padding: 6px 20px;

    &:nth-child(odd) {
        background: ${({ theme }) => theme.colors.gray05};
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Button = styled(ButtonComponent)`
    && {
        min-width: 160px;
        height: 40px;
        margin-left: auto;
    }
`;
