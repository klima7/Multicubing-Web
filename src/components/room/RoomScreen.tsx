import { FC, useEffect } from 'react';
import { useWebSocket } from '../../hooks';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import Box from '@mui/material/Box';
import { enterRoom, fetchRoom, leaveRoom, processRoomMessage } from '../../redux/room/room-actions';
import Chat from './Chat';
import LoadingIndicator from '../../components/_lib/LoadingIndicator';
import SpectatorButton from './SpectatorButton';
import Times from './Times';
import Status from './Status';
import Stats from './Stats';

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
  const loading = useAppSelector(state => state.room.loading);

  useEffect(() => {
    dispatch(enterRoom(roomSlug));
    return () => {
      dispatch(leaveRoom());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(loading === true) {
    return (
      <LoadingIndicator />
    );
  }

  return (
    <div style={{textAlign: 'left', margin: '1ex 3ex'}}>
      <SpectatorButton />
      <Box height={10} />
      <Box sx={{ display: 'flex', height: '200px' }}>
        <Box sx={{ flex: 1 }}>
          <Status roomSlug={roomSlug} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Chat roomSlug={roomSlug} />
        </Box>
      </Box>
      <Box height={10} />
      <Box sx={{ display: 'flex', height: '370px' }}>
        <Box sx={{ flex: 8 }}>
          <Times roomSlug={roomSlug} />
        </Box>
        <Box sx={{ flex: 2 }}>
          <Stats roomSlug={roomSlug} />
        </Box>
      </Box>
    </div>
  );
}

export default RoomScreen;
