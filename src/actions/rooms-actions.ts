import { roomsSlice } from '../reducers/rooms-reducer';
import * as roomsApi from '../api/rooms-api';

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