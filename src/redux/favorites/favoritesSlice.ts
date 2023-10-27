import { createSlice } from "@reduxjs/toolkit";
import Product from "../../models/Product";

const favoriteItems =
  localStorage.getItem("favoriteItems") !== null
    ? JSON.parse(localStorage.getItem("favoriteItems") || "")
    : [];

interface FavoritesState {
  favorites: Product[];
}

const initialState: FavoritesState = {
  favorites: favoriteItems,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
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

export const { addItemToFavorites, removeItemAtFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
