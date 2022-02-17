import { createAsyncThunk } from '@reduxjs/toolkit'
import * as authService from '../services/authService'

export const register = createAsyncThunk('registration/register', 
    async (data: {login: string, email: string, password: string}, {rejectWithValue}) => {
      await new Promise(r => setTimeout(r, 500));
      try {
        const response = await authService.register(data.login, data.email, data.password);
        return response.data
      } catch(error: any) {
        return rejectWithValue(error.response.data)
      }
    }
  )
