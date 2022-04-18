import backend from './backend'
import { Account } from '../types/types'


export interface AccountResponse {
  email: string;
  username: string;
  date_joined: string;
  last_seen?: string;
}


export function getAccountFromResponse(res: AccountResponse) {
  const account = new Account(res.email, res.username, res.date_joined, res.last_seen)
  return account
}


export async function getAccount(username: string) {
  const response = await backend.get<AccountResponse>(`/accounts/${username}/`);
  const account = getAccountFromResponse(response.data);
  return account;
}


export async function getCurrentAccount() {
  const response = await backend.get('/accounts/me/');
  const account = getAccountFromResponse(response.data);
  return account;
}
