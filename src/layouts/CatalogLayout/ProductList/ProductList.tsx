import React from 'react';

import { SimpleProductProps } from '@graphql/queries';
import { Container } from './ProductList.styled';
import ProductCard from '@components/ProductCard/ProductCard';

interface IProductList {
    products: SimpleProductProps[];
}

const ProductList: React.FC<IProductList> = ({ products }) => {
    return (
        <Container>
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </Container>
    );
};

export default ProductList;
