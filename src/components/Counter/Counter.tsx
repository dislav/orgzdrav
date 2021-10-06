import React, { useState, useEffect } from 'react';

import { Container, Button, Input } from './Counter.styled';

interface ICounter {
    className?: string;
    value?: number;
    onChange?: (count: number) => void;
}

const Counter: React.FC<ICounter> = ({ className, value, onChange }) => {
    const [count, setCount] = useState(value || 0);

    useEffect(() => {
        onChange?.(count);
    }, [count]);

    const onDecrement = () => {
        setCount(count - 1);
    };

    const onIncrement = () => {
        setCount(count + 1);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^\d+]/, '');
        setCount(+value);
    };

    return (
        <Container className={className}>
            <Button onClick={onDecrement}>-</Button>
            <Input type="text" value={count} onChange={onChangeHandler} />
            <Button onClick={onIncrement}>+</Button>
        </Container>
    );
};

export default Counter;
