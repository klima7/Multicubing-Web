import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { Account, Message } from '../../types/types';

interface StateType {
  roomSlug: string | null;
  users: Account[];
  messages: Message[];
}

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    roomSlug: null,
    users: [],
    messages: [],
  } as StateType,
  reducers: {
    enterRoom(state, action: PayloadAction<{roomSlug: string}>) {
      state.roomSlug = action.payload.roomSlug;
      state.users = [];
    },
    resetRoom(state) {
      state.users = [];
      state.messages = [];
    },
    updateRoom(state, action: PayloadAction<{users: Account[], messages: Message[]}>) {
      const payload = action.payload;

      // Update users
      const usernames = state.users.map(u => u.username);
      payload.users.forEach(u => {
        if(!usernames.includes(u.username)) {
          state.users.push(u);
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
      state.users = [];
      state.messages = [];
    },
    updateUser(state, action: PayloadAction<{user: Account}>) {
      const user = action.payload.user;
      state.users = state.users.filter(u => u.username !== user.username);
      state.users.push(user)
    },
    deleteUser(state, action: PayloadAction<{username: string}>) {
      state.users = state.users.filter(user => user.username !== action.payload.username);
    },
  },
});

export default roomSlice.reducer;
