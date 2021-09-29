import React from 'react';
import { useForm } from 'react-hook-form';

import { ProductOption } from '@graphql/types';
import { Container } from './SectionOptions.styled';
import Checkbox from '@components/Checkbox/Checkbox';

interface ISectionOptions {
    options: ProductOption[];
}

const SectionOptions: React.FC<ISectionOptions> = ({ options }) => {
    const { register, watch } = useForm();

    const selectedOptions = watch('option');

    return (
        <Container>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <Checkbox name={`option.${index}`} register={register}>
                            {option.name} ({option.price || 0} ₽)
                        </Checkbox>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default SectionOptions;
