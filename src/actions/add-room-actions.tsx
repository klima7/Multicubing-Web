import { addRoomSlice } from '../reducers/add-room-reducer';

const userActions = addRoomSlice.actions;


export const openAddRoomDialog = userActions.open;
export const clearAddRoomDialog = userActions.clear;
