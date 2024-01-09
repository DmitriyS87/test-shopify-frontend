import { configureStore } from "@reduxjs/toolkit";
import ProductsReducers from "../features/ProductsList/reducer/productsSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducers,
  },
});
