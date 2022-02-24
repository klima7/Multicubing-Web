import axios from 'axios';
import roomsReducer from '../reducers/rooms-reducer';
import { ApiError, ApiErrorData, RoomResponse, Room } from '../types/types';
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


export async function getRooms(): Promise<Room[]> {
  try {
    const response = await backend.get('/rooms/');
    const roomResponses = response.data as RoomResponse[]
    const rooms = roomResponses.map(roomResponse => new Room(roomResponse))
    return rooms;
  } catch(e) {
    if(axios.isAxiosError(e)) {
      throw new ApiError(e.response?.data as ApiErrorData, e.response?.status ?? 0);
    }
    throw e;
  }
}