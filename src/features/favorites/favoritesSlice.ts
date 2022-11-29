import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FavoritesState } from './favorites.types';

const initialState: FavoritesState = {
  collection: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.collection.push({
        label: action.payload,
        idx: state.collection.length,
      });
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(
        ({ idx }) => idx !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
