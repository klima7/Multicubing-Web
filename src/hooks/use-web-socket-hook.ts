import { useEffect, useState } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { Event, CloseEvent } from 'reconnecting-websocket';
import config from '../config';
import { useAppSelector } from './redux-hooks';

interface UseWebSocketParams {
  url: string, 
  authOnly?: boolean;
  heartbeat?: boolean;
  heartbeatInterval?: number;
  onMessage?: ((event: MessageEvent<any>) => void) | null;
  onOpen?: ((event: Event) => void) | null;
  onReconnect?: ((event: Event) => void) | null;
  onClose?: ((event: CloseEvent) => void) | null;
}

export function useWebSocket({
  url,
  authOnly = true,
  heartbeat = false,
  heartbeatInterval = 5000,
  onMessage = null,
  onOpen = null,
  onReconnect = null,
  onClose = null,
}: UseWebSocketParams): ReconnectingWebSocket {

  const [webSocket, setWebSocket] = useState<ReconnectingWebSocket>();
  const token = useAppSelector(state => state.auth.token);

  useEffect(() => {

      if(authOnly && token === null) {
        return;
      }

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

      let heartbeatInt: NodeJS.Timeout;
      if(heartbeat === true) {
        heartbeatInt = setInterval(() => {
          console.log('Heartbeat')
          ws?.send(JSON.stringify("heartbeat"));
        }, heartbeatInterval)
      }

      return () => {
        if(heartbeat === true) {
          clearInterval(heartbeatInt);
        }
        ws?.close();
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  
  return webSocket!;
}
