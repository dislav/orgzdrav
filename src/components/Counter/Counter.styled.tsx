import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

export const Input = styled.input`
    font-size: 14px;
    text-align: center;
    width: 100%;
    min-width: 60px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.gray05};
    border: none;
    padding: 8px 6px;
    appearance: none;
    outline: none;
`;
