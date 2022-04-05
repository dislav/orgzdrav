import React from 'react';

import { Container, Value } from './NumberList.styled';

interface INumberList {
    className?: string;
    list: string[];
}

const NumberList: React.FC<INumberList> = ({ className, list }) => {
    return (
        <Container className={className}>
            {list.map((text, index) => {
                const value = index + 1;

                return (
                    <li key={index}>
                        <Value>{value >= 10 ? value : `0${value}`}</Value>
                        {text}
                    </li>
                );
            })}
        </Container>
    );
};

export default NumberList;
