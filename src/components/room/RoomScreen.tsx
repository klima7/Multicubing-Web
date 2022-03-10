import { FC } from 'react';
import { useWebSocket } from '../../hooks';

interface Props {
  roomSlug: string;
}

const RoomScreen: FC<Props> = ({roomSlug}) => {

  useWebSocket({
    url: `/ws/rooms/${roomSlug}/`,
    heartbeat: true,
    onMessage: event => {
      console.log(`Room received: ${event}`)
    },
    onOpen: event => console.log('Room Open'),
    onClose: event => console.log('Room Close'),
    onReconnect: event => {
      console.log('Room reconnect');
    },
  });

  return (
    <div>
      <h1>You are inside room</h1>
    </div>
  );
}

export default RoomScreen;
