import { createAsyncThunk } from '@reduxjs/toolkit'
import * as authService from '../services/authService'

export const register = createAsyncThunk('posts/fetchPosts', 
    async (data: {login: string, email: string, password: string}) => {
    await new Promise(r => setTimeout(r, 1000));
    const response = await authService.register(data.login, data.email, data.password)
    return response.data
  })
