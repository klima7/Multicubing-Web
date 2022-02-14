import backend from '../backend'


export function login(email: string, password: string) {
  const data = {
    'email': email,
    'password': password,
  }
  backend.post('/accounts/login/', data);
}

export function register(login: string, email: string, password: string) {
  const data = {
    'email': email,
    'username': login,
    'password': password,
  }
  return backend.post('/accounts/register/', data);
}
