import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { ProductProps, ProductsState } from './products.types';
import { fetchProducts } from './productsAPI';

const initialState: ProductsState = {
  collection: [],
  status: 'idle',
  selectedProducts: [],
};

export const getProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<ProductProps>) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.collection = action.payload;
      })
      .addCase(getProductsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
