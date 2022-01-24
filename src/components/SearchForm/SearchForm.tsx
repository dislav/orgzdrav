import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { Container } from './SearchForm.styled';
import { Container as Input } from '@components/Input/Input.styled';

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
            <Input>
                <input
                    name="search"
                    onChange={onChangeHandler}
                    placeholder="Поиск"
                />
            </Input>
        </Container>
    );
};

export default SearchForm;
