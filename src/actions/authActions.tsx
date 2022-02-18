import * as authService from "../services/authService"
import { authSlice } from "../reducers/authReducer";

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions

export function login(login: string, password: string, rememberMe: boolean) {
  return async (dispatch: any) => {
    dispatch(loginStart())
    try {
      const token = await authService.login(login, password);
      dispatch(loginSuccess({token, rememberMe}))
    } catch(err) {
      dispatch(loginFailure())
    }
  };
}
