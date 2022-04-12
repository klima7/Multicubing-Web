import { getRoomUsers } from '../../api/accounts-api'
import { roomSlice } from './room-reducer';

const roomActions = roomSlice.actions;

export function fetchRoomUsers(roomSlug: string) {
  return async (dispatch: any) => {
    try {
      const users = await getRoomUsers(roomSlug);
      dispatch(roomActions.setUsers({users: users}))
    } catch(e: unknown) {
      console.log('Error occurred')
    }
  };
}
