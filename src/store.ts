import {ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import authReducer from './reducers/auth-reducer';
import registrationReducer from './reducers/register-reducer';
import {reducer as notificationsReducer} from 'react-notification-system-redux';
import userReducer from './reducers/user-reducer';
import addRoomReducer from './reducers/add-room-reducer';
import roomsReducer from './reducers/rooms-reducer';
import generalReducer from './reducers/general-reducer';
import permitReducer from './reducers/permit-reducer';
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
