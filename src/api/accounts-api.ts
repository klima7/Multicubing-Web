import backend from './backend'
import { Account } from '../types/types'


export async function getAccountById(id: number) {
  const response = await backend.get(`/accounts/${id}/`);
  const account = response.data as Account;
  return account;
}

export async function getCurrentAccount() {
  const response = await backend.get('/accounts/me/');
  const account = response.data as Account;
  return account;
}
