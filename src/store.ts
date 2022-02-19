import {ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';
import registrationReducer from './reducers/registerReducer';
import {reducer as notificationsReducer} from 'react-notification-system-redux';
import { connectRouter } from 'connected-react-router'
import history from './utils/history'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';

const combined = combineReducers({
  register: registrationReducer,
  auth: authReducer,
  notifications: notificationsReducer,
  router: connectRouter(history),
});

export const store = createStore(combined, composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))))

store.subscribe(() => {
  const auth = store.getState().auth;
  if(auth.rememberMe || !auth.logged) {
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
