import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Room, RoomsFilters } from '../types/types';

interface StateType {
  rooms: Room[];
  fetching: boolean;
  filters: RoomsFilters;
}

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    fetching: false,
    filters: new RoomsFilters("all", false, false),
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
    updateRoom(state, action: PayloadAction<{room: Room}>) {
      state.rooms.push(action.payload.room);
    },
    deleteRoom(state, action: PayloadAction<{slug: string}>) {
      state.rooms = state.rooms.filter(room => room.slug !== action.payload.slug);
    },
    setRoomsFilters(state, action: PayloadAction<{filters: RoomsFilters}>) {
      state.filters = action.payload.filters;
    },
  },
});

export default roomsSlice.reducer;
