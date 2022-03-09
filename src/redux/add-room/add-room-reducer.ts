import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StateType {
  open: boolean;
  pending: boolean;
  takenName: string | null;
}

export const addRoomSlice = createSlice({
  name: 'addRoom',
  initialState: {
    open: false,
    pending: false,
    takenName: null,
  } as StateType,
  reducers: {
    open(state) {
      state.open = true;
      state.pending = false;
      state.takenName = null;
    },
    clear(state) {
      state.open = false;
      state.pending = false;
      state.takenName = null;
    },
    addingStarted(state) {
      state.pending = true;
    },
    addingFinished(state) {
      state.pending = false;
    },
    addingFinishedWithTakenError(state, action: PayloadAction<{name: string}>) {
      state.pending = false;
      state.takenName = action.payload.name;
    }
  },
});

export default addRoomSlice.reducer;
