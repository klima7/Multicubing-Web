import { createAsyncThunk } from '@reduxjs/toolkit'
import * as authService from '../api/auth-api'
import { show, Notification } from '../utils/notifications';

export const register = createAsyncThunk('registration/register', 
    async (data: {login: string, email: string, password: string}, {rejectWithValue, dispatch}) => {
      await new Promise(r => setTimeout(r, 500));
      try {
        const response = await authService.register(data.login, data.email, data.password);
        const notification: Notification = {
          title: 'Registration success',
          message: 'Now you can login',
        };
        dispatch(show(notification, 'success'))
        return response.data
      } catch(err: any) {
        return rejectWithValue(err.response.data)
      }
    }
  )
