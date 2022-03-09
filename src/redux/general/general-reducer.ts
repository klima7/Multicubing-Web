import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeIdentifier } from '../../types/types';


interface StateType {
  theme: ThemeIdentifier;
  parentUrl: string | null;
};

const persistedState = JSON.parse(String(localStorage.getItem('general'))) as StateType | null;

const initialState: StateType = {
  theme: persistedState?.theme ?? "light",
  parentUrl: persistedState?.parentUrl ?? null,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState: initialState,
  reducers: {
    setTheme(state, action: PayloadAction<{theme: ThemeIdentifier}>) {
      state.theme = action.payload.theme;
    },
    setParentUrl(state, action: PayloadAction<{parentUrl: string}>) {
      state.parentUrl = action.payload.parentUrl;
    },
    resetParentUrl(state) {
      state.parentUrl = null;
    },
  },
});

export default generalSlice.reducer;
