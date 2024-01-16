import React from "react";
import { Product } from "../features/Product/Product";
import { MainLayout } from "../shared/ui/MainLayout";

export const ProductPage = () => {
  return (
    <MainLayout>
      <Product />
    </MainLayout>
  );
};
