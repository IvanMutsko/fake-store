import { configureStore } from "@reduxjs/toolkit";

import categorySlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import { apiSlice } from "./api/apiSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productsSlice,
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMidelware) => getMidelware().concat(apiSlice.middleware),
});
