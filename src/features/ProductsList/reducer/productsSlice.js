import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsList } from "../api";
import { transformProduct } from "../lib/products";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.products;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const serverProducts = action.payload || [];
        state.status = "succeeded";
        state.products = serverProducts.map(transformProduct);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getProductsList();
    return response.json();
  },
);

export const { setProducts } = counterSlice.actions;

export default counterSlice.reducer;

export const selectAllProduts = (state) => state.products.products;

export const selectProductById = (state, productId) =>
  state.products.products.find((product) => {
    return product.id === productId;
  });
