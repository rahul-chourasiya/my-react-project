import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    let response = await axios.get('https://fakestoreapi.in/api/products?limit=100');
    return response.data.products;
  }
);

const initialState = {
  product: [],
  productcategory:[],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterproduct: (state, action) => {
    state.productcategory = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { filterproduct} = productSlice.actions
export default productSlice.reducer;
