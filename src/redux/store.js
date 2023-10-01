import { configureStore } from "@reduxjs/toolkit";

import categorySlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productsSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMidelware) => getMidelware().concat(apiSlice.middleware),
});
