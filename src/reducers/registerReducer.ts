import { createSlice } from '@reduxjs/toolkit'
import { register } from '../actions/registerActions';

export const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    pending: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.pending = true;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.pending = false;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.pending = false;
    });
  }
});

export default registrationSlice.reducer
