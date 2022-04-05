import React from 'react';

import { Container, Input, CircularProgress } from './SearchForm.styled';

interface ISearchForm {
    className?: string;
    label?: string;
    onChange: React.Dispatch<string>;
    isLoading?: boolean;
}

const SearchForm: React.FC<ISearchForm> = ({
    className,
    label = 'Поиск',
    onChange,
    isLoading,
}) => {
    return (
        <Container className={className}>
            <Input
                name="search"
                label={label}
                onChange={(e) => onChange(e.target.value)}
                InputProps={{
                    endAdornment: isLoading && <CircularProgress size={20} />,
                }}
            />
        </Container>
    );
};

export default SearchForm;
