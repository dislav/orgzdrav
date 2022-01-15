import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import ButtonComponent from '@components/Button/Button';

export const Button = styled(ButtonComponent)`
    height: 48px;
`;

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
    flex-direction: column;

    ${up('xl')} {
        max-width: 820px;
        margin: 0 auto;
    }
`;

export const Controls = styled.div`
    margin-bottom: 20px;
`;
