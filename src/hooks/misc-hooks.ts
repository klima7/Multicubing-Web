import { Account } from '../types/types';
import { useAppSelector } from './redux-hooks';

export function useAccount(): Account {
  const account = useAppSelector(state => state.auth.account);
  return account!;
}
