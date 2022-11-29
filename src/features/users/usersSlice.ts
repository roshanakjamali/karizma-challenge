import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { UsersState } from './users.types';
import { fetchUsers } from './usersAPI';

const initialState: UsersState = {
  collection: [],
  status: 'idle',
};

export const getUsersAsync = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchUsers();
  return response;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.collection = action.payload;
      })
      .addCase(getUsersAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default usersSlice.reducer;
