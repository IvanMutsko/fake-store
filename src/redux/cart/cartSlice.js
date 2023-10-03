import { createSlice } from "@reduxjs/toolkit";

const cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const favoriteItems =
  localStorage.getItem("favoriteItems") !== null
    ? JSON.parse(localStorage.getItem("favoriteItems"))
    : [];

const initialState = {
  cart: cartItems,
  favorites: favoriteItems,
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

      localStorage.setItem("cartItems", JSON.stringify(newCart));
    },
    removeItemAtCart: (state, { payload }) => {
      const newCart = state.cart.filter(({ id }) => id !== payload);

      state.cart = newCart;

      localStorage.setItem("cartItems", JSON.stringify(newCart));
    },
    addItemToFavorites: (state, { payload }) => {
      let newFavorites = [...state.favorites];
      const found = state.favorites.find(({ id }) => id === payload.id);

      if (!found) {
        newFavorites.push({ ...payload });
      }
      state.favorites = newFavorites;

      localStorage.setItem("favoriteItems", JSON.stringify(newFavorites));
    },
    removeItemAtFavorites: (state, { payload }) => {
      const newFavorites = state.favorites.filter(({ id }) => id !== payload);

      state.favorites = newFavorites;

      localStorage.setItem("favoriteItems", JSON.stringify(newFavorites));
    },
  },
});

export const {
  addItemToCart,
  removeItemAtCart,
  addItemToFavorites,
  removeItemAtFavorites,
} = cartSlice.actions;

export default cartSlice.reducer;
