import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiError } from '../../types/types';

interface StateType {
  permit: boolean;
  check: {
    pending: boolean;
    error: any;
    notFound: boolean;
  },
  enter: {
    password: string | null;
    invalidPassword: boolean;
    pending: boolean;
    error: any;
  }
}

export const permitSlice = createSlice({
  name: 'room',
  initialState: {
    permit: false,
    check: {
      pending: false,
      error: null,
      notFound: false,
    },
    enter: {
      password: null,
      invalidPassword: false,
      pending: false,
      error: null,
    }
  } as StateType,
  reducers: {
    checkStart(state) {
      state.check = {
        pending: true,
        error: null,
        notFound: false,
      };
    },
    checkSuccess(state, action: PayloadAction<{permit: boolean}>) {
      state.check = {
        pending: false,
        error: null,
        notFound: false,
      };
      state.permit = action.payload.permit;
    },
    checkFailure(state, action: PayloadAction<{error: any}>) {
      const error = action.payload.error;
      state.check = {
        pending: false,
        error: error,
        notFound: false,
      };
      state.permit = false;

      if(error instanceof ApiError && error.status === 404) {
        state.check.notFound = true;
      }
    },

    enterStart(state, action: PayloadAction<{password: string}>) {
      state.enter = {
        password: action.payload.password,
        invalidPassword: false,
        pending: true,
        error: null,
      };
    },
    enterSuccess(state, action: PayloadAction<{passwordCorrect: boolean}>) {
      state.enter.pending = false;
      state.enter.invalidPassword = !action.payload.passwordCorrect;
      state.permit = action.payload.passwordCorrect;
    },
    enterFailure(state, action: PayloadAction<{error: any}>) {
      state.enter.pending = false;
      state.enter.error = action.payload.error;
      state.permit = false;
    },
  },
});

export default permitSlice.reducer;
