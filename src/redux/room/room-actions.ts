import { getRoomUsers } from '../../api/accounts-api'
import { roomSlice } from './room-reducer';

const roomActions = roomSlice.actions;


export function enterRoom(roomSlug: string) {
  return async (dispatch: any) => {
    dispatch(roomActions.enterRoom({roomSlug: roomSlug}));
    dispatch(fetchRoom());
  };
}


export const leaveRoom = roomActions.leaveRoom;


export function fetchRoom() {
  return async (dispatch: any, getState: any) => {
    const roomSlug = getState().room.roomSlug;
    dispatch(roomActions.enterRoom({roomSlug: roomSlug}));
    try {
      const users = await getRoomUsers(roomSlug);
      dispatch(roomActions.updateRoom({users: users}))
    } catch(e: unknown) {
      console.log('Error occurred')
    }
  };
}


export function processRoomMessage(message: any) {
  return async (dispatch: any, getState: any) => {
    const json = JSON.parse(message);
    console.log(`Processing message: ${json}`)
    console.log(`Type: ${json.type}`);
    if(json.type === 'users.update') {
      dispatch(roomActions.updateUser({user: json.user}));
    }
    if(json.type === 'users.delete') {
      console.log("deleted");
      dispatch(roomActions.deleteUser({username: json.username}));
    }
    if(json.type === 'users.refresh') {
      dispatch(fetchRoom());
    }
  }
}
