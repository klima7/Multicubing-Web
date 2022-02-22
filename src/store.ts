import {ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import authReducer from './reducers/auth-reducer';
import registrationReducer from './reducers/register-reducer';
import {reducer as notificationsReducer} from 'react-notification-system-redux';
import userReducer from './reducers/user-reducer';
import addRoomReducer from './reducers/add-room-reducer';
import { connectRouter } from 'connected-react-router'
import history from './utils/history'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  register: registrationReducer,
  auth: authReducer,
  user: userReducer,
  addRoom: addRoomReducer,
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
  const auth = store.getState().auth;
  if(auth.rememberMe || !auth.logged) {
    localStorage.setItem('token', JSON.stringify(auth.token));
    localStorage.setItem('account', JSON.stringify(auth.account));
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
