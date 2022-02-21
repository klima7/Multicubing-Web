import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { Account } from '../types/types';

interface StateType {
  user: Account | null;
  loading: boolean;
  notFound: boolean;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    notFound: false,
  } as StateType,
  reducers: {
    loadingStarted(state) {
      state.user = null;
      state.loading = true;
      state.notFound = false;
    },
    userGet(state, action: PayloadAction<{user: Account}>) {
      state.loading = false;
      state.user = action.payload.user;
    },
    userNotFound(state) {
      state.loading = false;
      state.notFound = true;
    },
    loadingFailure(state) {
      state.loading = false;
    },
    clearUser(state) {
      state.user = null;
      state.loading = false;
      state.notFound = false;
    }
  },
});

export default userSlice.reducer;
