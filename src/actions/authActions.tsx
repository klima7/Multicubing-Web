import { success, error } from 'react-notification-system-redux';
import { Notification } from 'react-notification-system';
import * as authService from "../services/authService"
import { authSlice } from "../reducers/authReducer";


const authActions = authSlice.actions;

export function login(login: string, password: string, rememberMe: boolean) {
  return async (dispatch: any) => {
    dispatch(authActions.loginStart())
    try {
      const token = await authService.login(login, password);
      dispatch(authActions.loginSuccess({token, rememberMe}))
      const notification: Notification = {
        title: 'Login success',
        message: 'You have successfully logged',
        position: 'tr',
        autoDismiss: 8,
      };
      dispatch(success(notification))
    } catch(err) {
      dispatch(authActions.loginFailure())
      const notification: Notification = {
        title: 'Login faiure',
        message: 'Invalid login or password',
        position: 'tr',
        autoDismiss: 8,
      };
      dispatch(error(notification))
    }
  };
}

export function logout(dispatch: any) {
  dispatch(authActions.logout())
  console.log("Logging out")
  const notification: Notification = {
    title: 'Logout success',
    message: 'You have successfully logged out',
    position: 'tr',
    autoDismiss: 8,
  };
  dispatch(success(notification))
}
