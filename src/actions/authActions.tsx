import * as authService from "../services/authService"

// export const { increment, decrement, incrementByAmount } = authSlice.actions

export function login(login: string, password: string) {
  return async (dispatch: any) => {
    const token = await authService.login(login, password);
    console.log("Login finish");
    console.log(`Token is ${token}`)
  };
}
