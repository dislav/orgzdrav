import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import client from '@graphql/client';
import {
    GetProductCategoriesDocument,
    GetProductCategoriesQuery,
    GetProductCategoriesQueryVariables,
    GetProductsDocument,
    GetProductsQuery,
    GetProductsQueryVariables,
    OrderEnum,
    ProductCategory,
    ProductsOrderByEnum,
} from '@graphql';

import CatalogLayout from '@layouts/CatalogLayout/CatalogLayout';
import SearchForm from '@components/SearchForm/SearchForm';
import Accordion from '@layouts/CatalogLayout/Accordion/Accordion';

import { getProductsByCategories } from '@redux/products/selectors';
import {
    AccordionList,
    AccordionTitle,
} from '@layouts/CatalogLayout/CatalogLayout.styled';
import { InferGetStaticPropsType } from 'next';
import ProductItem from '@layouts/CatalogLayout/ProductItem/ProductItem';
import Heading from '@components/Heading/Heading';
import EmptyList from '@components/EmptyList/EmptyList';

const Catalog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    productCategories,
}) => {
    const [search, setSearch] = useState('');
    const [expanded, setExpanded] = useState<string | null>(null);

    const onExpanded =
        (category: string) => (e: React.SyntheticEvent, isExpended: boolean) =>
            setExpanded(isExpended ? category : null);

    const productsByCategories = useSelector(getProductsByCategories);

    const getCategoryTitleBySlug = useCallback(
        (slug: string) =>
            productCategories.find((category) => category.slug === slug)?.name,
        [productCategories]
    );

    const filteredProducts = useMemo(() => {
        const lowerSearch = search.toLowerCase();

        return productsByCategories.filter(([category, products]) =>
            products.some(
                (product) =>
                    getCategoryTitleBySlug(category)
                        ?.toLowerCase()
                        ?.indexOf(lowerSearch) !== -1 ||
                    product.name?.toLowerCase().indexOf(lowerSearch) !== -1
            )
        );
    }, [productsByCategories, getCategoryTitleBySlug, search]);

    return (
        <CatalogLayout
            meta={{
                title: 'Продукты',
            }}
            showShopToolbar
        >
            <Heading
                title="Проект «OrgZdrav»"
                subtitle="Организуйте с нуля весь документооборот в клинике"
            />
            <AccordionList>
                <SearchForm label="Поиск по документам" onChange={setSearch} />

                {filteredProducts.length > 0 ? (
                    <>
                        {filteredProducts.map(([category, products]) => (
                            <Accordion
                                key={category}
                                expanded={expanded === category}
                                onChange={onExpanded(category)}
                                summary={
                                    <AccordionTitle>
                                        {getCategoryTitleBySlug(category)}
                                    </AccordionTitle>
                                }
                                details={products.map((product) => (
                                    <ProductItem
                                        key={product.id}
                                        {...product}
                                    />
                                ))}
                            />
                        ))}
                    </>
                ) : (
                    <EmptyList>Список пуст</EmptyList>
                )}
            </AccordionList>
        </CatalogLayout>
    );
};

export const getStaticProps = async () => {
    const { data: products } = await client.query<
        GetProductsQuery,
        GetProductsQueryVariables
    >({
        query: GetProductsDocument,
        fetchPolicy: 'no-cache',
        variables: {
            where: {
                orderby: [
                    {
                        field: ProductsOrderByEnum.MenuOrder,
                        order: OrderEnum.Asc,
                    },
                ],
                categoryNotIn: ['vebinary', 'uslugi', 'konsultaczii', 'audity'],
            },
            first: 100,
        },
    });

    const { data: productCategories } = await client.query<
        GetProductCategoriesQuery,
        GetProductCategoriesQueryVariables
    >({
        query: GetProductCategoriesDocument,
        fetchPolicy: 'no-cache',
        variables: {
            first: 100,
        },
    });

    return {
        props: {
            productCategories: (productCategories.productCategories?.nodes ||
                []) as ProductCategory[],
            initialReduxState: {
                products: products.products?.nodes || [],
            },
        },
        revalidate: 1,
    };
};

export default Catalog;
