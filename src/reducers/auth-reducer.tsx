import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { Account } from '../types/types';

const token = JSON.parse(String(localStorage.getItem('token'))) as string | null;
const account = JSON.parse(String(localStorage.getItem('account'))) as Account | null;

interface StateType {
  token: string | null;
  logged: boolean;
  rememberMe: boolean;
  account: Account | null;
  loggingInProgress: boolean;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: token,
    logged: token != null,
    rememberMe: false,
    account: account,
    loggingInProgress: false,
  } as StateType,
  reducers: {
    loginStart(state) {
      console.log('loginStart');
      state.loggingInProgress = true;
    },
    loginFailure(state) {
      console.log('loginFailure');
      state.loggingInProgress = false;
    },
    loginSuccess(state, action: PayloadAction<{token: string, account: Account, rememberMe: boolean}>) {
      console.log(`loginSuccess ${action.payload}`);
      state.loggingInProgress = false;
      state.logged = true;
      state.token = action.payload.token;
      state.account = action.payload.account;
      state.rememberMe = action.payload.rememberMe;
    },
    logout(state) {
      console.log('logout');
      state.logged = false;
      state.token = null;
      state.account = null;
    }
  },
});

export default authSlice.reducer
