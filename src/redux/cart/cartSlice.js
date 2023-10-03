import { createSlice } from "@reduxjs/toolkit";

const cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  cart: cartItems,
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
  },
});

export const { addItemToCart, removeItemAtCart } = cartSlice.actions;

export default cartSlice.reducer;
