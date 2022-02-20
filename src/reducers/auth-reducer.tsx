import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

const token: string = localStorage.getItem('token') ?? ''

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: token,
    logged: token.length > 0,
    rememberMe: false,
    loggingInProgress: false,
  },
  reducers: {
    loginStart(state) {
      console.log('loginStart');
      state.loggingInProgress = true;
    },
    loginFailure(state) {
      console.log('loginFailure');
      state.loggingInProgress = false;
    },
    loginSuccess(state, action: PayloadAction<{token: string, rememberMe: boolean}>) {
      console.log(`loginSuccess ${action.payload}`);
      state.loggingInProgress = false;
      state.logged = true;
      state.token = action.payload.token;
      state.rememberMe = action.payload.rememberMe;
    },
    logout(state) {
      console.log('logout');
      state.logged = false;
      state.token = '';
    }
  },
});

export default authSlice.reducer
