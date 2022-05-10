import Box from '@mui/material/Box';
import { FC, useEffect } from 'react';
import LoadingIndicator from '../../components/_lib/LoadingIndicator';
import { useAppSelector, useAppThunkDispatch, useWebSocket } from '../../hooks';
import { enterRoom, fetchRoom, leaveRoom, processRoomMessage } from '../../redux/room/room-actions';
import RoomBar from './bar/RoomBar';
import Chat from './chat/Chat';
import General from './general/General';
import KeyboardInterceptor from './KeyboardInterceptor';
import Stats from './stats/Stats';
import Times from './Times';

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
    <KeyboardInterceptor>
      <Box 
        sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 84px)' }}
        style={{textAlign: 'left', margin: '1ex 1ex'}}
        >

        <Box sx={{height: 'auto'}}>
          <RoomBar />
        </Box>

        <Box height={10} />
        
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column'}}>

          <Box sx={{ flex: 1, display: 'flex' }}>

            <Box sx={{ width: '50%' }}>
              <General roomSlug={roomSlug} />
            </Box>

            <Box width={10} />

            <Box sx={{ width: '50%' }}>
              <Chat />
            </Box>

          </Box>

          <Box height={10} />

          <Box sx={{ flex: 1, display: 'flex' }}>

            <Box sx={{ flex: 5 }}>
              <Times roomSlug={roomSlug} />
            </Box>

            <Box width={10} />

            <Box sx={{ flex: 1 }}>
              <Stats roomSlug={roomSlug} />
            </Box>

          </Box>

        </Box>

      </Box>
    </KeyboardInterceptor>
  );
}

export default RoomScreen;
