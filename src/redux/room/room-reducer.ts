import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { Account } from '../../types/types';

interface StateType {
  users: Account[];
}

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    users: [],
  } as StateType,
  reducers: {
    setUsers(state, action: PayloadAction<{users: Account[]}>) {
      state.users = action.payload.users;
    },
  },
});

export default roomSlice.reducer;
