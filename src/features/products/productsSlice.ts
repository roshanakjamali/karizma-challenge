import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { ProductsState } from './products.types';
import { fetchProducts } from './productsAPI';

const initialState: ProductsState = {
  collection: [],
  status: 'idle',
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
  reducers: {},
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

export default productsSlice.reducer;
