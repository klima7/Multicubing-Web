import axios from 'axios';
import { getAccount } from '../api/accounts-api'
import { userSlice } from '../reducers/user-reducer';

const userActions = userSlice.actions;

export function getUser(username: string) {
  return async (dispatch: any) => {
    dispatch(userActions.loadingStarted())
    try {
      const account = await getAccount(username);
      dispatch(userActions.userGet({user: account}))
    } catch(e: unknown) {
      if(axios.isAxiosError(e)) {
        if(e.response?.status === 404) {
          dispatch(userActions.userNotFound())
        }
        else {
          dispatch(userActions.loadingFailure())
        }
      }
    }
  };
}

export const clearUser = userActions.clearUser;
