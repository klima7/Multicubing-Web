import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { Account } from '../../types/types';

const token = JSON.parse(String(localStorage.getItem('token'))) as string | null;
const account = JSON.parse(String(localStorage.getItem('account'))) as Account | null;

interface StateType {
  token: string | null;
  logged: boolean;
  rememberMe: boolean;
  account: Account | null;
  loggingInProgress: boolean;
  accountRefreshInProgress: boolean;
  logoutDialogVisible: boolean;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: token,
    logged: token != null,
    rememberMe: false,
    account: account,
    loggingInProgress: false,
    accountRefreshInProgress: false,
    logoutDialogVisible: false,
  } as StateType,
  reducers: {
    loginStart(state) {
      state.loggingInProgress = true;
    },
    loginFailure(state) {
      state.loggingInProgress = false;
    },
    loginSuccess(state, action: PayloadAction<{token: string, account: Account, rememberMe: boolean}>) {
      state.loggingInProgress = false;
      state.logged = true;
      state.token = action.payload.token;
      state.account = action.payload.account;
      state.rememberMe = action.payload.rememberMe;
    },
    logout(state) {
      state.logged = false;
      state.token = null;
      state.account = null;
      state.logoutDialogVisible = false;
    },
    accountRefreshStart(state) {
      state.accountRefreshInProgress = true;
    },
    accountRefreshSuccess(state, action: PayloadAction<{account: Account}>) {
      state.accountRefreshInProgress = false;
    },
    accountRefreshFailure(state) {
      state.accountRefreshInProgress = false;
    },
    showLogoutDialog(state) {
      state.logoutDialogVisible = true;
    },
    hideLogoutDialog(state) {
      state.logoutDialogVisible = false;
    },
  },
});

export default authSlice.reducer
