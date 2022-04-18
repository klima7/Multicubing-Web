import { getParticipants, getParticipantFromResponse } from '../../api/participants-api';
import { getMessages, getMessageFromResponse } from '../../api/messages-api';
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
      const participants = await getParticipants(roomSlug);
      const messages = await getMessages(roomSlug);
      dispatch(roomActions.updateRoom({participants: participants, messages: messages}))
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
    if(json.type === 'participants.update') {
      dispatch(roomActions.updateParticipant({participant: getParticipantFromResponse(json.participant)}));
    }
    if(json.type === 'participants.delete') {
      dispatch(roomActions.deleteParticipant({username: json.username}));
    }
    if(json.type === 'users.refresh') {
      dispatch(fetchRoom());
    }
    if(json.type === 'messages.update') {
      dispatch(roomActions.updateMessage({message: getMessageFromResponse(json.message)}));
    }
    if(json.type === 'messages.delete') {
      dispatch(roomActions.deleteMessage({id: json.id}));
    }
  }
}
