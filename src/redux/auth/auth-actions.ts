import { push } from 'connected-react-router'
import { show, Notification } from '../../utils/notifications';
import * as authService from "../../api/auth-api"
import { authSlice } from "./auth-reducer";
import { getCurrentAccount } from '../../api/accounts-api';


const authActions = authSlice.actions;

export function login(
  login: string, 
  password: string, 
  rememberMe: boolean,
  from: string | undefined
  ) {
  return async (dispatch: any) => {
    dispatch(authActions.loginStart())
    try {
      const loginResponse = await authService.login(login, password);
      dispatch(authActions.loginSuccess({
        token: loginResponse.token, 
        account: loginResponse.account, 
        rememberMe
      }))
      const notification: Notification = {
        title: 'Login success',
        message: 'You have successfully logged',
      };
      dispatch(show(notification, 'success'))
      dispatch(push(from ?? '/rooms'))
    } catch(err) {
      dispatch(authActions.loginFailure())
      const notification: Notification = {
        title: 'Login faiure',
        message: 'Invalid login or password',
      };
      dispatch(show(notification, 'error'))
    }
  };
}

export function logout(dispatch: any) {
  dispatch(authActions.logout())
  const notification: Notification = {
    title: 'Logout success',
    message: 'You have successfully logged out',
  };
  dispatch(push('/'));
  dispatch(show(notification, 'success'));
}

export async function refreshAccount(dispatch: any) {
  dispatch(authActions.accountRefreshStart());
  try {
    const account = await getCurrentAccount();
    dispatch(authActions.accountRefreshSuccess({account}));
  } catch(err) {
    dispatch(authActions.accountRefreshFailure());
  }
}

export const showLogoutDialog = authActions.showLogoutDialog;

export const hideLogoutDialog = authActions.hideLogoutDialog;