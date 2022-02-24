import axios from 'axios';
import { ApiError, ApiErrorData } from '../types/types';
import backend from './backend'

export async function createRoom(
  name: string,
  description: string | null,
  cube: string,
  password: string | null,
) {
  const data = {
    'name': name,
    'description': description,
    'cube': cube,
    'password': password,
  }
  try {
    await backend.post('/rooms/', data);
  } catch(e) {
    if(axios.isAxiosError(e)) {
      throw new ApiError(e.response?.data as ApiErrorData, e.response?.status ?? 0);
    }
  }
}
