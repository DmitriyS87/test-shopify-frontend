import React from "react";
import { MainLayout } from "../shared/ui/MainLayout";
import { ProductsList } from "../features/ProductsList/ProductsList";

export const ProductsPage = () => {
  return (
    <MainLayout>
      <ProductsList />
    </MainLayout>
  );
};
