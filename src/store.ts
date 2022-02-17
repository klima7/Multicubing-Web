import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import registrationReducer from './reducers/registrationReducer';
import {reducer as notificationsReducer} from 'react-notification-system-redux';

const combined = combineReducers({
  notifications: notificationsReducer,
});

export const store = configureStore({
  reducer: {
    authReducer,
    registrationReducer,
    notifications: combined,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
