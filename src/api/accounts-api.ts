import backend from './backend'
import { Account } from '../types/types'


export async function getAccount(username: string) {
  const response = await backend.get(`/accounts/${username}/`);
  const account = response.data as Account;
  return account;
}

export async function getCurrentAccount() {
  const response = await backend.get('/accounts/me/');
  const account = response.data as Account;
  return account;
}
