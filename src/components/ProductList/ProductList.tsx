import React from 'react';

import { SimpleProductFragment } from '@graphql';

import { Container } from './ProductList.styled';
import ProductCard from '@components/ProductCard/ProductCard';

interface IProductList {
    products?: SimpleProductFragment[];
}

const ProductList: React.FC<IProductList> = ({ products }) => {
    return (
        <Container>
            {products && products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))
            ) : (
                <h3>Список товаров пуст</h3>
            )}
        </Container>
    );
};

export default ProductList;
