import {ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';
import registrationReducer from './reducers/registrationReducer';
import {reducer as notificationsReducer} from 'react-notification-system-redux';
import { connectRouter } from 'connected-react-router'
import history from './history'
import thunk from 'redux-thunk'

const combined = combineReducers({
  registrationReducer,
  authReducer,
  notifications: notificationsReducer,
  router: connectRouter(history),
});

export const store = createStore(combined, applyMiddleware(thunk))

store.subscribe(() => {
  const auth = store.getState().authReducer;
  if(auth.rememberMe) {
    localStorage.setItem('token', auth.token)
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
