import { getParticipants, setSpectator as setSpectatorAPI, getParticipantFromResponse } from '../../api/participants-api';
import { getMessages, getMessageFromResponse, addMessage } from '../../api/messages-api';
import { getTimes, getLastTurn, getTurnFromResponse, getTimeFromResponse, addTime as addTimeAPI } from '../../api/times-api';
import { roomSlice } from './room-reducer';
import { Flag } from '../../types/types';

const roomActions = roomSlice.actions;


export function enterRoom(roomSlug: string) {
  return async (dispatch: any, getState: any) => {
    const username = getState().auth.account.username;
    console.log('Username', username);
    dispatch(roomActions.enterRoom({roomSlug: roomSlug, username: username}));
    dispatch(fetchRoom());
  };
}


export const leaveRoom = roomActions.leaveRoom;


export function fetchRoom() {
  return async (dispatch: any, getState: any) => {
    const roomSlug = getState().room.roomSlug;
    dispatch(roomActions.resetRoom());
    try {
      const participants = await getParticipants(roomSlug);
      const messages = await getMessages(roomSlug);
      const times = await getTimes(roomSlug);
      let lastTurn = null;
      try {
        lastTurn = await getLastTurn(roomSlug);
      } catch(e) {}
      dispatch(roomActions.updateRoom({participants: participants, messages: messages, times: times, turn: lastTurn}))
      await new Promise(r => setTimeout(r, 1000));
      dispatch(roomActions.stopLoading())
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
    if(json.type === 'turns.update') {
      dispatch(roomActions.updateTurn({turn: getTurnFromResponse(json.turn)}));
    }
    if(json.type === 'times.update') {
      dispatch(roomActions.updateTime({time: getTimeFromResponse(json.time)}));
    }
  }
}


export function setSpectator(spectator: boolean) {
  return async (dispatch: any, getState: any) => {
    const roomSlug = getState().room.roomSlug;
    const username = getState().auth.account.username;
    try {
      await setSpectatorAPI(roomSlug, username, spectator);
    } catch(e: unknown) {
      console.log('Error occurred')
    }
  };
}


export function addTime(flag: Flag | null) {
  return async (dispatch: any, getState: any) => {
    const roomSlug = getState().room.roomSlug;
    const username = getState().auth.account.username;
    const turn = getState().room.turn?.number ?? -1;
    const elapsed = +(getState().room.timer.end!!) - +(getState().room.timer.start!!);
    const seconds = elapsed / 1000;
    try {
      await addTimeAPI(roomSlug, turn, username, seconds, flag);
      dispatch(roomActions.clearTimer());
    } catch(e: unknown) {
      console.log('Error occurred')
    }
  };
}


export function addTimeNoFlag() {
  return async (dispatch: any, getState: any) => {
    const flag = getState().room.flag;
    dispatch(addTime(flag))
  };
}


export function sendMessage(content: string) {
  return async (dispatch: any, getState: any) => {
    const roomSlug = getState().room.roomSlug;
    try {
      await addMessage(roomSlug, content)
    } catch(e: unknown) {
      console.log('Error occurred')
    }
  };
}


export const loadTimer = roomActions.loadTimer;
export const startTimer = roomActions.startTimer;
export const stopTimer = roomActions.stopTimer;
export const clearTimer = roomActions.clearTimer;
export const nextFlag = roomActions.nextFlag;
export const prevFlag = roomActions.prevFlag;