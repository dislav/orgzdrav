import styled from 'styled-components';

import AuthButtonComponent from '@components/AuthButton/AuthButton';

export const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const AuthButton = styled(AuthButtonComponent)`
    && {
        height: 48px;
        margin-left: auto;
    }
`;
