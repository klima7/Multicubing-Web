import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Room } from '../types/types';

interface StateType {
  rooms: Room[];
  fetching: boolean;
}

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    fetching: false,
  } as StateType,
  reducers: {
    roomsFetchingStarted(state) {
      state.fetching = true;
    },
    roomsFetchingSuccess(state, action: PayloadAction<{rooms: Room[]}>) {
      state.rooms = action.payload.rooms;
      state.fetching = false;
    },
    roomsFetchingFailure(state) {
      state.fetching = false;
    },
  },
});

export default roomsSlice.reducer;
