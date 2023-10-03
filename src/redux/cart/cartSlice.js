import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favorites: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? {
                ...item,
                quantity: payload.quantity || item.quantity + 1,
              }
            : item;
        });
      } else {
        newCart.push({ ...payload, quantity: 1 });
      }
      state.cart = newCart;
    },
    removeItemToCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
    },
    addItemToFavorites: (state, { payload }) => {
      let newFavorites = [...state.favorites];
      const found = state.favorites.find(({ id }) => id === payload.id);

      if (!found) {
        newFavorites.push({ ...payload });
      }
      state.favorites = newFavorites;
    },
  },
});

export const { addItemToCart, removeItemToCart, addItemToFavorites } =
  cartSlice.actions;

export default cartSlice.reducer;
