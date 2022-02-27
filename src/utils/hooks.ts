import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { Event, CloseEvent } from 'reconnecting-websocket';
import type { RootState, AppDispatch } from '../store';
import { Account } from '../types/types';
import config from '../config';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();

export function useAccount(): Account {
  const account = useAppSelector(state => state.auth.account);
  return account!;
}

interface UseWebSocketParams {
  url: string, 
  onMessage?: ((event: MessageEvent<any>) => void) | null;
  onOpen?: ((event: Event) => void) | null;
  onReconnect?: ((event: Event) => void) | null;
  onClose?: ((event: CloseEvent) => void) | null;
}

export function useWebSocket({
  url,
  onMessage = null,
  onOpen = null,
  onReconnect = null,
  onClose = null,
}: UseWebSocketParams): ReconnectingWebSocket {
  const [webSocket, setWebSocket] = useState<ReconnectingWebSocket>();
  const token = useAppSelector(state => state.auth.token);
  useEffect(() => {
      const protocol = config.secured ? 'wss' : 'ws';
      let addr = token != null ? `${protocol}://${config.backend}${url}?token=${token}` : url;
      const ws = new ReconnectingWebSocket(addr)
      setWebSocket(ws);
      ws.onopen = (event) => {
        onOpen?.(event);
        if((ws as any)._reconnecting === true) {
          onReconnect?.(event);
        }
        (ws as any)._reconnecting = true;
      };
      ws.onclose = onClose;
      ws.onmessage = onMessage;
      return () => ws?.close();
  }, [token]);
  return webSocket!;
}