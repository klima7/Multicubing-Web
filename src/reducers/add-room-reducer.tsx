import { createSlice  } from '@reduxjs/toolkit'

interface StateType {
  open: boolean;
  pending: boolean;
}

export const addRoomSlice = createSlice({
  name: 'addRoom',
  initialState: {
    open: false,
    pending: false,
  } as StateType,
  reducers: {
    open(state) {
      state.open = true;
      state.pending = false;
    },
    clear(state) {
      state.open = false;
      state.pending = false;
    },
    addingStarted(state) {
      state.pending = true;
    },
    addingFinished(state) {
      state.pending = false;
    },
  },
});

export default addRoomSlice.reducer;
