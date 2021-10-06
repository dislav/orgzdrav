import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useQuery } from '@apollo/client';
import { useDebounce } from 'use-debounce';

import {
    GetProductsQuery,
    GetProductsQueryProps,
} from '@graphql/queries/products';
import { RootQueryToProductTypeConnectionWhereArgs } from '@graphql/graphql';
import { setProducts } from '@redux/products/actions';

import { Container } from './FilterForm.styled';
import Input from '@components/Input/Input';

interface IInputs {
    search: string;
}

const FilterForm: React.FC = () => {
    const dispatch = useDispatch();

    const products = useQuery<
        GetProductsQueryProps,
        { where: RootQueryToProductTypeConnectionWhereArgs }
    >(GetProductsQuery, {
        skip: true,
    });

    const { register, watch } = useForm<IInputs>();

    const search = watch('search', '');
    const [debounceSearch] = useDebounce(search, 300);

    useMemo(() => {
        const filterProducts = async () => {
            try {
                const { data } = await products.refetch({
                    where: { search: debounceSearch },
                });

                dispatch(setProducts(data.products.nodes));
            } catch (e) {
                console.log(e);
            }
        };

        filterProducts();
    }, [debounceSearch, dispatch]);

    return (
        <Container>
            <Input
                name="search"
                placeholder="Поиск по названиям"
                register={register}
            />
        </Container>
    );
};

export default FilterForm;
