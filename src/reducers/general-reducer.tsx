import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeIdentifier } from '../types/types';


interface StateType {
  theme: ThemeIdentifier
};

const persistedState = JSON.parse(String(localStorage.getItem('general'))) as StateType | null;

const defaultState: StateType = {
  theme: "light"
}

export const generalSlice = createSlice({
  name: 'general',
  initialState: persistedState ?? defaultState,
  reducers: {
    setTheme(state, action: PayloadAction<{theme: ThemeIdentifier}>) {
      state.theme = action.payload.theme;
    },
  },
});

export default generalSlice.reducer;
