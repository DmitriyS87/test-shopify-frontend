import React from "react";
import { ProductsList } from "../features/ProductsList/ProductsList";
import ErrorBoundary from "../shared/ui/ErrorBoundary/ErrorBoundary";
import { Skeleton } from "antd";

export const ProductsPage = () => {
  return (
    <ErrorBoundary
      fallbackComponent={<Skeleton active title="ERROR"></Skeleton>}
    >
      <ProductsList />
    </ErrorBoundary>
  );
};
