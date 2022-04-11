import axios from 'axios';
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


interface CheckRoomPermitResponse {
  permit: boolean;
}

export async function checkRoomPermit(roomSlug: string): Promise<boolean> {
  try {
    const response = await backend.get(`/permits/${roomSlug}/`);
    const typeResponses = response.data as CheckRoomPermitResponse;
    return typeResponses.permit;
  } catch(e) {
    if(axios.isAxiosError(e)) {
      throw new ApiError(e.response?.data as ApiErrorData, e.response?.status ?? 0);
    }
    throw e;
  }
}

export async function sendRoomPassword(roomSlug: string, password: string): Promise<boolean> {
  try {
    const data = { password }
    await backend.post(`/permits/${roomSlug}/`, data);
    return true;
  } catch(e) {
    if(axios.isAxiosError(e)) {
      if(e.response?.status === 401) {
        return false;
      }
      else {
        throw new ApiError(e.response?.data as ApiErrorData, e.response?.status ?? 0);
      }
    }
    throw e;
  }
}