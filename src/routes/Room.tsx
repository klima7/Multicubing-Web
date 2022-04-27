import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppSelector, useAppThunkDispatch, useParentUrl } from "../hooks";
import RoomPasswordScreen from '../components/room/RoomPasswordScreen';
import RoomScreen from '../components/room/RoomScreen';
import { checkPermit } from '../redux/permit/permit-actions';
import LoadingIndicator from '../components/_lib/LoadingIndicator';
import NotFound from '../components/_lib/NotFound';


type RoomParams = {
  roomSlug: string;
};

function RoomPage() {
  useParentUrl('/rooms/');

  const permit = useAppSelector(state => state.permit.permit);
  const permitCheckPending = useAppSelector(state => state.permit.check.pending);
  const notFound = useAppSelector(state => state.permit.check.notFound);
  const dispatch = useAppThunkDispatch();
  const { roomSlug } = useParams<RoomParams>();

  useEffect(() => {
    dispatch(checkPermit(roomSlug));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(notFound) {
    return (
      <NotFound />
    )
  }

  if(permitCheckPending) {
    return (
      <LoadingIndicator />
    )
  }

  return (
    <div>
      {permit ? <RoomScreen roomSlug={roomSlug} /> : <RoomPasswordScreen roomSlug={roomSlug} /> }
    </div>
  );
}

export default RoomPage;    
