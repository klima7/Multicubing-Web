import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppSelector, useAppThunkDispatch, useParentUrl } from "../utils/hooks";
import RoomPasswordScreen from '../components/RoomPasswordScreen';
import RoomScreen from '../components/RoomScreen';
import { checkPermit } from '../actions/permit-actions';
import LoadingIndicator from '../components/LoadingIndicator';
import { useWebSocket } from '../utils/hooks';


type RoomParams = {
  roomSlug: string;
};

function RoomPage() {
  useParentUrl('/rooms/');

  const permit = useAppSelector(state => state.permit.permit);
  const permitCheckPending = useAppSelector(state => state.permit.check.pending);
  const dispatch = useAppThunkDispatch();
  const { roomSlug } = useParams<RoomParams>();

  useEffect(() => {
    dispatch(checkPermit(roomSlug));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useWebSocket({
    url: `/ws/rooms/${roomSlug}/`, 
    onMessage: event => {
      console.log(`Room received: ${event}`)
    },
    onOpen: event => console.log('Room Open'),
    onClose: event => console.log('Room Close'),
    onReconnect: event => {
      console.log('Room reconnect');
    },
  });

  if(permitCheckPending) {
    return (
      <LoadingIndicator />
    )
  }

  return (
    <div>
      {permit ? <RoomScreen /> : <RoomPasswordScreen roomSlug={roomSlug} /> }
    </div>
  );
}

export default RoomPage;    
