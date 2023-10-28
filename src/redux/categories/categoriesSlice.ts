import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../utils/constants";
import Category from "../../models/Category";

interface CategoriesState {
  list: Category[];
  isLoading: boolean;
}

const initialState: CategoriesState = {
  list: [],
  isLoading: false,
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${BASE_URL}/categories`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default categoriesSlice.reducer;
