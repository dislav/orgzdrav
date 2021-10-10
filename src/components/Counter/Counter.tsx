import React, { useState, useEffect } from 'react';

import { Container, Button, Input } from './Counter.styled';

interface ICounter {
    className?: string;
    defaultValue: number;
    onChange?: (value: number) => void;
}

const Counter: React.FC<ICounter> = ({ className, defaultValue, onChange }) => {
    const formatValue = (value: string) => value.replace(/[^\d+]/, '');
    const [value, setValue] = useState(defaultValue || 0);

    const onDecrement = () => {
        setValue(+formatValue((value - 1).toString()));
    };

    const onIncrement = () => {
        setValue(+formatValue((value + 1).toString()));
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+formatValue(e.target.value));
    };

    useEffect(() => {
        if (defaultValue === value) return;
        onChange?.(value);
    }, [value]);

    return (
        <Container className={className}>
            <Button onClick={onDecrement}>-</Button>
            <Input value={value} onChange={onChangeHandler} />
            <Button onClick={onIncrement}>+</Button>
        </Container>
    );
};

export default Counter;
