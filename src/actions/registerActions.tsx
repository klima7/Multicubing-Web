import { createAsyncThunk } from '@reduxjs/toolkit'
import { register } from '../services/authService'

export const registerThunk = createAsyncThunk('posts/fetchPosts', 
    async (data: {login: string, email: string, password: string}) => {
    const response = await register(data.login, data.email, data.password)
    return response.data
  })
