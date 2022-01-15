import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { Container } from './SearchForm.styled';

interface ISearchForm {
    className?: string;
    onChange: React.Dispatch<string>;
}

const SearchForm: React.FC<ISearchForm> = ({ className, onChange }) => {
    const onChangeHandler = useDebouncedCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
        },
        400
    );

    return (
        <Container className={className}>
            <input name="search" onChange={onChangeHandler} />
        </Container>
    );
};

export default SearchForm;
