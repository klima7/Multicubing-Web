import {ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import authReducer from './redux/auth/auth-reducer';
import registrationReducer from './redux/register/register-reducer';
import {reducer as notificationsReducer} from 'react-notification-system-redux';
import userReducer from './redux/user/user-reducer';
import addRoomReducer from './redux/add-room/add-room-reducer';
import roomsReducer from './redux/rooms/rooms-reducer';
import generalReducer from './redux/general/general-reducer';
import permitReducer from './redux/permit/permit-reducer';
import roomReducer from './redux/room/room-reducer';
import { connectRouter } from 'connected-react-router'
import history from './utils/history'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  general: generalReducer,
  register: registrationReducer,
  auth: authReducer,
  user: userReducer,
  addRoom: addRoomReducer,
  rooms: roomsReducer,
  permit: permitReducer,
  room: roomReducer,
  notifications: notificationsReducer,
  router: connectRouter(history),
});

const middleware = [
  thunk, 
  routerMiddleware(history)
]

export const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(...middleware)
    )
  );

store.subscribe(() => {
  const state = store.getState();
  const auth = store.getState().auth;
  if(auth.rememberMe || !auth.logged) {
    localStorage.setItem('token', JSON.stringify(auth.token));
    localStorage.setItem('account', JSON.stringify(auth.account));
  }
  localStorage.setItem('general', JSON.stringify(state.general));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
