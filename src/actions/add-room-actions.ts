import { success, error } from 'react-notification-system-redux';
import { addRoomSlice } from '../reducers/add-room-reducer';
import { createRoom } from '../api/rooms-api';
import { Notification } from 'react-notification-system';
import { push } from 'connected-react-router'
import { ApiError } from '../types/types';

const userActions = addRoomSlice.actions;

export const openAddRoomDialog = userActions.open;

export const clearAddRoomDialog = userActions.clear;

export function addRoom(
  name: string,
  description: string | null = null,
  cube: string,
  password: string | null = null,
  ) {
  return async (dispatch: any) => {
    dispatch(userActions.addingStarted());
    try {
      await createRoom(name, description, cube, password);
      dispatch(userActions.addingFinished());
      dispatch(userActions.clear());
      const notification: Notification = {
        title: 'Room created',
        position: 'bc',
        autoDismiss: 8,
        action: {
          label: 'Join',
          callback: () => {dispatch(push(`/room/${name}`))},
        }
      };
      dispatch(success(notification))
    } catch(e) {
      if(e instanceof ApiError) {
        if(e.status !== 0 && e.data.error === 'name-taken') {
          dispatch(userActions.addingFinishedWithTakenError({name: name}));
        }
        else {
          const notification: Notification = {
            title: 'Failed to add room',
            message: 'Unexpected error occurred',
            position: 'tr',
            autoDismiss: 8,
          };
          dispatch(error(notification));
          dispatch(userActions.addingFinished());
        }
      }
    }
  };
}