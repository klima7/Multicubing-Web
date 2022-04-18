import { FC, useEffect } from 'react';
import { useWebSocket } from '../../hooks';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import { enterRoom, fetchRoom, leaveRoom, processRoomMessage } from '../../redux/room/room-actions';
import Chat from './Chat'

interface Props {
  roomSlug: string;
}

const RoomScreen: FC<Props> = ({roomSlug}) => {

  useWebSocket({
    url: `/ws/rooms/${roomSlug}/`,
    heartbeat: true,
    onMessage: event => {
      console.log(`Room received: ${event.data}`);
      dispatch(processRoomMessage(event.data));
    },
    onOpen: event => console.log('Room Open'),
    onClose: event => console.log('Room Close'),
    onReconnect: event => {
      console.log('Room reconnect');
      dispatch(fetchRoom());
    },
  });

  const dispatch = useAppThunkDispatch();
  const participants = useAppSelector(state => state.room.participants);

  useEffect(() => {
    dispatch(enterRoom(roomSlug));
    return () => {
      dispatch(leaveRoom());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>You are inside room</h1>
      <ul>{participants.map(participant => <li key={participant.user.username}>{participant.user.username} (Spectator: {participant.spectator.toString()})</li>)}</ul>
      <Chat roomSlug={roomSlug} />
    </div>
  );
}

export default RoomScreen;
