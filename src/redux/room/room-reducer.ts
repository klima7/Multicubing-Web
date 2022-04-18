import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { Message, Participant } from '../../types/types';

interface StateType {
  roomSlug: string | null;
  participants: Participant[];
  messages: Message[];
}

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    roomSlug: null,
    participants: [],
    messages: [],
  } as StateType,
  reducers: {
    enterRoom(state, action: PayloadAction<{roomSlug: string}>) {
      state.roomSlug = action.payload.roomSlug;
      state.participants = [];
    },
    resetRoom(state) {
      state.participants = [];
      state.messages = [];
    },
    updateRoom(state, action: PayloadAction<{participants: Participant[], messages: Message[]}>) {
      const payload = action.payload;

      // Update participants
      const usernames = state.participants.map(p => p.user.username);
      payload.participants.forEach(p => {
        if(!usernames.includes(p.user.username)) {
          state.participants.push(p);
        }
      });

      // Update messages
      const messageIds = state.messages.map(m => m.id);
      payload.messages.forEach(m => {
        if(!messageIds.includes(m.id)) {
          state.messages.push(m);
        }
      });
    },
    leaveRoom(state) {
      state.roomSlug = null;
      state.participants = [];
      state.messages = [];
    },
    updateParticipant(state, action: PayloadAction<{participant: Participant}>) {
      const participant = action.payload.participant;
      state.participants = state.participants.filter(p => p.user.username !== participant.user.username);
      state.participants.push(participant)
    },
    deleteParticipant(state, action: PayloadAction<{username: string}>) {
      state.participants = state.participants.filter(participant => participant.user.username !== action.payload.username);
    },
    updateMessage(state, action: PayloadAction<{message: Message}>) {
      const message = action.payload.message;
      state.messages = state.messages.filter(m => m.id !== message.id);
      state.messages.push(message)
    },
    deleteMessage(state, action: PayloadAction<{id: number}>) {
      state.messages = state.messages.filter(message => message.id !== action.payload.id);
    },
  },
});

export default roomSlice.reducer;
