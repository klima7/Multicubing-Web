import { success, error } from 'react-notification-system-redux';
import { addRoomSlice } from '../reducers/add-room-reducer';
import { createRoom } from '../api/rooms-api';
import { Notification } from 'react-notification-system';

const userActions = addRoomSlice.actions;

export const openAddRoomDialog = userActions.open;

export const clearAddRoomDialog = userActions.clear;

export function addRoom(
  name: string,
  ) {
  return async (dispatch: any) => {
    dispatch(userActions.addingStarted());
    try {
      await createRoom();
      dispatch(userActions.addingFinished());
      dispatch(userActions.clear());
      const notification: Notification = {
        title: 'Your Room created',
        message: 'Now you can join it!',
        position: 'tr',
        autoDismiss: 8,
        action: {
          label: 'Join',
          callback: () => {},
        }
      };
      dispatch(success(notification))
    } catch(e) {
      dispatch(userActions.addingFinished());
      const notification: Notification = {
        title: 'Failed to add room',
        message: 'Unexpected error occurred',
        position: 'tr',
        autoDismiss: 8,
      };
      dispatch(error(notification))
    }
  };
}