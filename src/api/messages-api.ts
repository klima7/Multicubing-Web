import axios from 'axios';
import { ApiError, ApiErrorData, Room, Message } from '../types/types';
import backend from './backend'


export interface MessageResponse {
  sender: string;
  room: string;
  content: string;
  send_time: string;
}


export function getMessageFromResponse(res: MessageResponse) {
  const send_time = new Date(res.send_time);
  const message = new Message(res.sender, res.room, res.content, send_time)
  return message
}


export async function addMessage(
  roomSlug: string,
  content: string,
) {
  const data = {
    'content': content,
  };
  try {
    await backend.post(`/rooms/${roomSlug}/messages/`, data);
  } catch(e) {
    if(axios.isAxiosError(e)) {
      throw new ApiError(e.response?.data as ApiErrorData, e.response?.status ?? 0);
    }
  }
}


export async function getMessages(roomSlug: string): Promise<Message[]> {
  try {
    const response = await backend.get(`/rooms/${roomSlug}/messages/`);
    const messagesResponses = response.data as MessageResponse[]
    const messages = messagesResponses.map(messagesResponse => getMessageFromResponse(messagesResponse))
    return messages;
  } catch(e) {
    if(axios.isAxiosError(e)) {
      throw new ApiError(e.response?.data as ApiErrorData, e.response?.status ?? 0);
    }
    throw e;
  }
}
