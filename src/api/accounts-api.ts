import backend from './backend'
import { Account } from '../types/types'


export async function getAccountById(id: number) {
  const response = await backend.post(`/accounts/${id}/`);
  const account = response.data as Account;
  return account;
}

export async function getCurrentAccount() {
  const response = await backend.post('/accounts/current/');
  const account = response.data as Account;
  return account;
}
