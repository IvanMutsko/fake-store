import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { shuffle } from "../../utils/common";
import { BASE_URL } from "../../utils/constants";
import Product from "../../models/Product";

interface ProductsState {
  list: Product[];
  filtered: Product[];
  related: Product[];
  isLoading: boolean;
}

const initialState: ProductsState = {
  list: [],
  filtered: [],
  related: [],
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByPrice: (state, action: PayloadAction<number>) => {
      state.filtered = state.list.filter(
        ({ price }) => price <= action.payload
      );
    },
    getRelatedProducts: (state, action: PayloadAction<number>) => {
      const list = state.list.filter(
        ({ category: { id } }) => id === action.payload
      );

      state.related = shuffle(list);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filterByPrice, getRelatedProducts } = productsSlice.actions;

export default productsSlice.reducer;
