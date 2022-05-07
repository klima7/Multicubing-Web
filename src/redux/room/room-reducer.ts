import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { Message, Participant, Time, Turn, TimerState, Flag } from '../../types/types';

interface StateType {
  roomSlug: string | null;
  username: string | null;
  loading: boolean;
  me: Participant | null;
  participants: Participant[];
  messages: Message[];
  times: Time[];
  tableParticipants: Participant[];
  tableTimes: Array<Array<Time | null>>;
  turn: Turn | null;
  timer: {
    start: Date | null;
    end: Date | null;
    state: TimerState;
    loaded: boolean;
  };
  flag: Flag | null;
}

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    roomSlug: null,
    username: null,
    loading: true,
    me: null,
    participants: [],
    messages: [],
    times: [],
    tableParticipants: [],
    tableTimes: [],
    turn: null,
    timer: {
      start: null,
      end: null,
      state: TimerState.Cleared,
      loaded: false,
    },
    flag: null,
  } as StateType,
  reducers: {
    enterRoom(state, action: PayloadAction<{roomSlug: string, username: string}>) {
      state.roomSlug = action.payload.roomSlug;
      state.username = action.payload.username;
      state.loading = true;
    },
    resetRoom(state) {
      state.participants = [];
      state.messages = [];
      state.times = [];
      state.loading = true;
    },
    updateRoom(state, action: PayloadAction<{participants: Participant[], messages: Message[], 
      times: Time[], turn: Turn | null}>) {
      const payload = action.payload;

      // Update participants
      const usernames = state.participants.map(p => p.user.username);
      payload.participants.forEach(p => {
        if(!usernames.includes(p.user.username)) {
          state.participants.push(p);
        }
      });
      updateMe(state);

      // Update messages
      const messageIds = state.messages.map(m => m.id);
      payload.messages.forEach(m => {
        if(!messageIds.includes(m.id)) {
          state.messages.push(m);
        }
      });

      // Update times
      state.times = action.payload.times;
      state.turn = action.payload.turn;

      updateTable(state);
    },
    stopLoading(state) {
      state.loading = false;
    },
    leaveRoom(state) {
      state.roomSlug = null;
      state.participants = [];
      state.messages = [];
      state.loading = true;
    },
    updateParticipant(state, action: PayloadAction<{participant: Participant}>) {
      const participant = action.payload.participant;
      state.participants = state.participants.filter(p => p.user.username !== participant.user.username);
      state.participants.push(participant);

      updateMe(state);
      updateTable(state);
    },
    deleteParticipant(state, action: PayloadAction<{username: string}>) {
      state.participants = state.participants.filter(participant => participant.user.username !== action.payload.username);
      updateTable(state);
    },
    updateMessage(state, action: PayloadAction<{message: Message}>) {
      const message = action.payload.message;
      state.messages = state.messages.filter(m => m.id !== message.id);
      state.messages.push(message)
    },
    deleteMessage(state, action: PayloadAction<{id: number}>) {
      state.messages = state.messages.filter(message => message.id !== action.payload.id);
    },
    updateTurn(state, action: PayloadAction<{turn: Turn}>) {
      state.turn = action.payload.turn;
    },
    updateTime(state, action: PayloadAction<{time: Time}>) {
      state.times.push(action.payload.time);
      updateTable(state);
    },
    loadTimer(state) {
      state.timer.loaded = true;
    },
    startTimer(state) {
      state.timer = {
        start: new Date(),
        end: null,
        state: TimerState.Running,
        loaded: false,
      };
    },
    stopTimer(state) {
      state.timer.end = new Date();
      state.timer.state = TimerState.Paused;
    },
    clearTimer(state) {
      state.timer = {
        ...state.timer,
        start: null,
        end: null,
        state: TimerState.Cleared,
      };
      state.flag = null;
    },
    nextFlag(state) {
      if (state.flag === null) state.flag = Flag.PLUS2;
      else if (state.flag === Flag.PLUS2) state.flag = Flag.DNF;
      else if (state.flag === Flag.DNF) state.flag = null;
    },
    prevFlag(state) {
      if (state.flag === null) state.flag = Flag.DNF;
      else if (state.flag === Flag.PLUS2) state.flag = null;
      else if (state.flag === Flag.DNF) state.flag = Flag.PLUS2;
    },
  },
});

function updateMe(state: StateType) {
  state.me = state.participants.find(p => p.user.username === state.username) || null;
}

function updateTable(state: StateType) {
  updateTableParticipants(state);

  const turns = state.times.map(t => t.turn_no);
  const maxTurn = Math.max(...turns);
  const tableTimes = []
  for(let i=1; i<=maxTurn; i++) {
    const turnTimes = []
    for(let participant of state.tableParticipants) {
      const time = state.times.filter(t => t.username === participant.user.username && t.turn_no === i)
      if(time.length > 0) turnTimes.push(time[0])
      else turnTimes.push(null);
    }
    tableTimes.push(turnTimes);
  }
  state.tableTimes = tableTimes;
  // const table = 
}

function updateTableParticipants(state: StateType) {
  state.tableParticipants = state.participants.filter(p => p.spectator === false);
}

export default roomSlice.reducer;
