import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeIdentifier } from '../types/types';

interface StateType {
  theme: ThemeIdentifier
}

export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    theme: ThemeIdentifier.Standard
  } as StateType,
  reducers: {
    setTheme(state, action: PayloadAction<{theme: ThemeIdentifier}>) {
      state.theme = action.payload.theme;
    },
  },
});

export default generalSlice.reducer;
