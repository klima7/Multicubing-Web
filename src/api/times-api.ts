import axios from 'axios';
import { ApiError, ApiErrorData, Time, Turn, Flag } from '../types/types';
import backend from './backend'


export interface TimeResponse {
  turn: number;
  user: string;
  time: number;
  flag: string;
}


export interface TurnResponse {
  room: string;
  number: number;
  scramble: string;
}


export function getTimeFromResponse(res: TimeResponse) {
  let flag: Flag | null = null;
  if (res.flag === 'DNF') flag = Flag.DNF
  else if (res.flag === '+2') flag = Flag.PLUS2
  const time = new Time(res.turn, res.user, res.time, flag);
  return time
}


export function getTurnFromResponse(res: TurnResponse) {
  const turn = new Turn(res.number, res.scramble);
  return turn
}


export async function getTimes(roomSlug: string): Promise<Time[]> {
  try {
    const response = await backend.get(`/rooms/${roomSlug}/times/`);
    const timesResponses = response.data as TimeResponse[]
    const times = timesResponses.map(res => getTimeFromResponse(res))
    return times;
  } catch(e) {
    if(axios.isAxiosError(e)) {
      throw new ApiError(e.response?.data as ApiErrorData, e.response?.status ?? 0);
    }
    throw e;
  }
}


export async function addTime(roomSlug: string, turn: number, username: string, time: number, flag: Flag | null) {
  let flagNum = null;
  if(flag === Flag.DNF) flagNum = 'dnf'
  else if(flag === Flag.PLUS2) flagNum = '+2'

  const data = {
    'time': time,
    'flag': flagNum,
  };

  try {
    await backend.put(`/rooms/${roomSlug}/turns/${turn}/times/${username}/`, data);
  } catch(e) {
    if(axios.isAxiosError(e)) {
      throw new ApiError(e.response?.data as ApiErrorData, e.response?.status ?? 0);
    }
  }
}


export async function getLastTurn(roomSlug: string): Promise<Turn> {
  try {
    const response = await backend.get(`/rooms/${roomSlug}/turns/last/`);
    const turnRes = response.data as TurnResponse
    const turn = getTurnFromResponse(turnRes);
    return turn;
  } catch(e) {
    if(axios.isAxiosError(e)) {
      throw new ApiError(e.response?.data as ApiErrorData, e.response?.status ?? 0);
    }
    throw e;
  }
}
