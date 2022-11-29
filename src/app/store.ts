import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import productsReducer from '../features/products/productsSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    favorites: favoritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
