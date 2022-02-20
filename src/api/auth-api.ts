import backend from './backend'
import { LoginResponse } from '../types/types';


export async function login(email: string, password: string): Promise<LoginResponse> {
  const data = {
    'login': email,
    'password': password,
  }
  const response = await backend.post('/accounts/login/', data);
  return response.data as LoginResponse;
}

export function register(login: string, email: string, password: string) {
  const data = {
    'email': email,
    'username': login,
    'password': password,
  }
  return backend.post('/accounts/register/', data);
}
