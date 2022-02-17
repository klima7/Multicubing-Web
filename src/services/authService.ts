import backend from '../backend'


export async function login(email: string, password: string) {
  const data = {
    'login': email,
    'password': password,
  }
  const response = await backend.post('/accounts/login/', data);
  const token = response.data.token;
  return token;
}

export function register(login: string, email: string, password: string) {
  const data = {
    'email': email,
    'username': login,
    'password': password,
  }
  return backend.post('/accounts/register/', data);
}
