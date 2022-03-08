import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Room, RoomsFilters } from '../types/types';

interface StateType {
  rooms: Room[];
  fetching: boolean;
  filters: RoomsFilters;
  filteredRooms: Room[];
}

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    fetching: false,
    filters: new RoomsFilters("all", false, false),
    filteredRooms: [],
  } as StateType,
  reducers: {
    roomsFetchingStarted(state) {
      state.fetching = true;
    },
    roomsFetchingSuccess(state, action: PayloadAction<{rooms: Room[]}>) {
      state.rooms = action.payload.rooms;
      state.fetching = false;
      state.filteredRooms = filterRooms(state.rooms, state.filters);
    },
    roomsFetchingFailure(state) {
      state.fetching = false;
    },
    updateRoom(state, action: PayloadAction<{room: Room}>) {
      state.rooms = state.rooms.filter(room => room.slug !== action.payload.room.slug)
      state.rooms.push(action.payload.room);
      state.filteredRooms = filterRooms(state.rooms, state.filters);
    },
    deleteRoom(state, action: PayloadAction<{slug: string}>) {
      state.rooms = state.rooms.filter(room => room.slug !== action.payload.slug);
      state.filteredRooms = filterRooms(state.rooms, state.filters);
    },
    setRoomsFilters(state, action: PayloadAction<{filters: RoomsFilters}>) {
      state.filters = action.payload.filters;
      state.filteredRooms = filterRooms(state.rooms, state.filters);
    },
  },
});

function filterRooms(rooms: Room[], filters: RoomsFilters): Room[] {
  return rooms.filter((room) => {
    const cube = filters.cube === "all" || room.cube === filters.cube;
    const publicOnly = filters.publicOnly ? room.private === false : true;
    const notEmpty = filters.notEmpty ? room.count !== 0 : true;
    return cube && publicOnly && notEmpty;
  })
}

export default roomsSlice.reducer;
