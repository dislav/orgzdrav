import styled from 'styled-components';

export interface IStyledTextSection {
    color?: string;
    textAlign?: string;
    margin?: string;
}

export const Container = styled.div<IStyledTextSection>`
    color: ${({ color }) => color || null};
    text-align: ${({ textAlign }) => textAlign || null};
    margin: ${({ margin }) => margin || null};
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 700;
`;

export const Content = styled.div`
    > p {
        font-size: 16px;
        line-height: 1.2;
        margin: 20px 0;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
