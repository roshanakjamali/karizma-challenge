import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { UserProps, UsersState } from './users.types';
import { fetchUsers } from './usersAPI';

const initialState: UsersState = {
  collection: [],
  status: 'idle',
  selectedUsers: [],
};

export const getUsersAsync = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchUsers();
  return response;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser: (state, action: PayloadAction<UserProps>) => {
      console.log(action.payload);
    },
  },
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

export const { selectUser } = usersSlice.actions;
export default usersSlice.reducer;
