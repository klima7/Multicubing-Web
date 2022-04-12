import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { Account } from '../../types/types';

interface StateType {
  roomSlug: string | null;
  users: Account[];
}

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    roomSlug: null,
    users: [],
  } as StateType,
  reducers: {
    enterRoom(state, action: PayloadAction<{roomSlug: string}>) {
      state.roomSlug = action.payload.roomSlug;
      state.users = [];
    },
    resetRoom(state) {
      state.users = [];
    },
    updateRoom(state, action: PayloadAction<{users: Account[]}>) {
      const payload = action.payload;
      const usernames = state.users.map(u => u.username);
      payload.users.forEach(u => {
        if(!usernames.includes(u.username)) {
          state.users.push(u);
        }
      });
    },
    leaveRoom(state) {
      state.roomSlug = null;
      state.users = [];
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
