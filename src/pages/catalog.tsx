import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
    SimpleProductFragment,
    useGetProductsLazyQuery,
} from '@graphql';

import CatalogLayout from '@layouts/CatalogLayout/CatalogLayout';
import SearchForm from '@components/SearchForm/SearchForm';
import Accordion from '@layouts/CatalogLayout/Accordion/Accordion';

import { setProducts } from '@redux/products/actions';
import { getProductsByCategories } from '@redux/products/selectors';
import {
    AccordionList,
    AccordionTitle,
} from '@layouts/CatalogLayout/CatalogLayout.styled';
import { InferGetStaticPropsType } from 'next';
import ProductItem from '@layouts/CatalogLayout/ProductItem/ProductItem';

const Catalog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    productCategories,
}) => {
    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState<string | null>(null);

    const onExpanded =
        (category: string) => (e: React.SyntheticEvent, isExpended: boolean) =>
            setExpanded(isExpended ? category : null);

    const productsByCategories = useSelector(getProductsByCategories);

    const [fetchProducts] = useGetProductsLazyQuery();

    const onSearch = async (search: string) => {
        console.log(search);

        try {
            const { data } = await fetchProducts({
                variables: {
                    where: {
                        search,
                        orderby: [
                            {
                                field: ProductsOrderByEnum.MenuOrder,
                                order: OrderEnum.Asc,
                            },
                        ],
                        categoryNotIn: ['vebinary'],
                    },
                    first: 100,
                },
            });

            console.log(data);

            if (data?.products?.nodes)
                dispatch(
                    setProducts(data.products.nodes as SimpleProductFragment[])
                );
        } catch (e) {
            console.log(e);
        }
    };

    const getCategoryTitleBySlug = useCallback(
        (slug: string) =>
            productCategories.find((category) => category.slug === slug)?.name,
        [productCategories]
    );

    return (
        <CatalogLayout
            meta={{
                title: 'Продукты',
            }}
            showShopToolbar
            hideFooter
        >
            <AccordionList>
                <SearchForm onChange={onSearch} />

                {productsByCategories.map(([category, products]) => (
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
                            <ProductItem key={product.id} {...product} />
                        ))}
                    />
                ))}
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
                categoryNotIn: ['vebinary'],
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
