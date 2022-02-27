import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../types/types';

interface StateType {
  theme: Theme
}

export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    theme: Theme.Standard
  } as StateType,
  reducers: {
    setTheme(state, action: PayloadAction<{theme: Theme}>) {
      state.theme = action.payload.theme;
    },
  },
});

export default generalSlice.reducer;
