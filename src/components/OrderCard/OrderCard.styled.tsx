import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.gray10};
    padding: 20px;
`;

export const Number = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.gray10};
    padding: 20px;

    &:last-child {
        border-bottom: none;
    }
`;

export const GroupDescription = styled.div`
    display: block;
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: 700;
    padding: 0 20px;
    margin-bottom: 20px;
`;

export const AccordionSummary = styled.span`
    color: ${({ theme }) => theme.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
`;

export const AccordionDetails = styled.div`
    padding-top: 8px;
`;

export const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 0 20px;
    
    ${up('md')} {
        grid-template-columns: repeat(7, 1fr);
        gap: 20px;
    }

    ${up('xl')} {
        grid-template-columns: repeat(10, 1fr);
    }
`;

export const Documents = styled.div`
    display: flex;
    flex-direction: column;
`;
