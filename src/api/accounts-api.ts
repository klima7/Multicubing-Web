import backend from './backend'
import { Account, AccountResponse } from '../types/types'


export async function getAccount(username: string) {
  const response = await backend.get<AccountResponse>(`/accounts/${username}/`);
  const account = new Account(response.data);
  return account;
}

export async function getCurrentAccount() {
  const response = await backend.get('/accounts/me/');
  const account = response.data as Account;
  return account;
}
