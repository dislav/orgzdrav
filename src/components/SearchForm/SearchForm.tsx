import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { Container, Input } from './SearchForm.styled';

interface ISearchForm {
    className?: string;
    onChange: React.Dispatch<string>;
}

const SearchForm: React.FC<ISearchForm> = ({ className, onChange }) => {
    const onChangeHandler = useDebouncedCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
        400
    );

    return (
        <Container className={className}>
            <Input name="search" label="Поиск" onChange={onChangeHandler} />
        </Container>
    );
};

export default SearchForm;
