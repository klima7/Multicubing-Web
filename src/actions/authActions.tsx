import * as authService from "../services/authService"
import { authSlice } from "../reducers/authReducer";

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions

export function login(login: string, password: string) {
  return async (dispatch: any) => {
    dispatch(loginStart())
    try {
      const token = await authService.login(login, password);
      console.log("Login finish");
      console.log(`Token is ${token}`)
      dispatch(loginSuccess(token))
    } catch(err) {
      dispatch(loginFailure())
    }
  };
}
