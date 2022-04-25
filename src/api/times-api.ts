import axios from 'axios';
import { ApiError, ApiErrorData, Time, Flag } from '../types/types';
import backend from './backend'


export interface TimeResponse {
  turn: number;
  user: string;
  time: number;
  flag: string;
}


export function getTimeFromResponse(res: TimeResponse) {
  let flag: Flag | null = null;
  if (res.flag === 'DNF') flag = Flag.DNF
  else if (res.flag === '+2') flag = Flag.PLUS2
  const time = new Time(res.turn, res.user, res.time, flag);
  return time
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
