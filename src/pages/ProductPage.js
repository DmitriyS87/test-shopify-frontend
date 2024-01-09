import React from "react";
import { Product } from "../features/Product/Product";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { pid } = useParams();
  console.log(pid);
  return <Product />;
};
