import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Room, RoomsFilters } from '../types/types';

interface StateType {
  permit: boolean;
  check: {
    pending: boolean;
    error: any;
  },
  enter: {
    password: string | null;
    pending: boolean;
    error: any;
  }
}

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    permit: false,
    check: {
      pending: false,
      error: null
    },
    enter: {
      password: null,
      pending: false,
      error: null,
    }
  } as StateType,
  reducers: {
    checkStart(state) {
      state.check = {
        pending: true,
        error: null,
      };
    },
    checkSuccess(state, action: PayloadAction<{permit: boolean}>) {
      state.check = {
        pending: false,
        error: null,
      };
      state.permit = action.payload.permit;
    },
    checkFailure(state, action: PayloadAction<{error: any}>) {
      state.check = {
        pending: false,
        error: action.payload.error,
      };
      state.permit = false;
    },
  },
});

export default roomSlice.reducer;
