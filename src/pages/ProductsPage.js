import React from 'react';
import { MainLayout } from '../shared/ui/MainLayout';
import { ProductCard } from '../entities/Product/components/ProductCard';

const ProductsPage = () => {
  return (
    <MainLayout>
      <ProductCard />
    </MainLayout>
  );
};

export default ProductsPage;
