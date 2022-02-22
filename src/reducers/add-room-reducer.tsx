import { createSlice  } from '@reduxjs/toolkit'

interface StateType {
  open: boolean;
}

export const addRoomSlice = createSlice({
  name: 'addRoom',
  initialState: {
    open: false,
  } as StateType,
  reducers: {
    open(state) {
      state.open = true;
    },
    clear(state) {
      state.open = false;
    }
  },
});

export default addRoomSlice.reducer;
