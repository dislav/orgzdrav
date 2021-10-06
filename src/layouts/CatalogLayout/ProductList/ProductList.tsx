import React from 'react';
import { useSelector } from 'react-redux';

import { getProducts } from '@redux/products/selectors';

import { Container } from './ProductList.styled';
import ProductCard from '@components/ProductCard/ProductCard';

const ProductList: React.FC = () => {
    const products = useSelector(getProducts);

    return (
        <Container>
            {products.length > 0 ? (
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
