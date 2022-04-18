import axios from 'axios';
import backend from './backend'
import { ApiError, ApiErrorData, Participant } from '../types/types'
import { getAccountFromResponse, AccountResponse } from './accounts-api'


export interface ParticipantResponse {
  user: AccountResponse;
  room: string;
  spectator: boolean;
}


export function getParticipantFromResponse(res: ParticipantResponse) {
  const account = getAccountFromResponse(res.user);
  const participant = new Participant(account, res.room, res.spectator);
  return participant
}


export async function getParticipants(roomSlug: string) {
  try {
    const response = await backend.get<ParticipantResponse[]>(`/rooms/${roomSlug}/participants/`);
    const participants = response.data.map(response_element => getParticipantFromResponse(response_element));
    return participants;
  } catch(e) {
    if(axios.isAxiosError(e)) {
      throw new ApiError(e.response?.data as ApiErrorData, e.response?.status ?? 0);
    }
    throw e;
  }
}
