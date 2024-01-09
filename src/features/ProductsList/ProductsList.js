import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import { ProductCard } from "../../entities/Product/components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProduts } from "./reducer/productsSlice";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProduts);
  const productsStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  return (
    <List
      grid={{
        gutter: 12,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 5,
      }}
      dataSource={products}
      renderItem={(product, idx) => (
        <List.Item key={product.id}>
          <Link to={`/products/${product.id || idx}`}>
            <ProductCard
              isLoading={productsStatus === "loading"}
              product={product}
            />
          </Link>
        </List.Item>
      )}
    />
  );
};
