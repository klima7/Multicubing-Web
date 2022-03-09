import { roomsSlice } from './rooms-reducer';
import * as roomsApi from '../../api/rooms-api';

const roomsActions = roomsSlice.actions;

export function getRooms() {
  return async (dispatch: any) => {
    dispatch(roomsActions.roomsFetchingStarted());
    try {
      const rooms = await roomsApi.getRooms();
      dispatch(roomsActions.roomsFetchingSuccess({rooms: rooms}));
    } catch(e) {
      dispatch(roomsActions.roomsFetchingFailure());
    }
  };
}

export function processRoomsMessage(message: any) {
  return async (dispatch: any) => {
    const json = JSON.parse(message);
    console.log(`Processing message: ${json}`)
    console.log(`Type: ${json.type}`);
    if(json.type === 'rooms.added') {
      dispatch(roomsActions.updateRoom({room: json.room}));
    }
    if(json.type === 'rooms.deleted') {
      console.log("deleted");
      dispatch(roomsActions.deleteRoom({slug: json.slug}));
    }
    if(json.type === 'rooms.refresh') {
      dispatch(getRooms());
    }
  }
}

export const setRoomsFilters = roomsActions.setRoomsFilters;
