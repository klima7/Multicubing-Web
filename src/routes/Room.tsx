import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppSelector, useAppThunkDispatch, useParentUrl } from "../utils/hooks";
import RoomPasswordScreen from '../components/RoomPasswordScreen';
import RoomScreen from '../components/RoomScreen';
import { checkPermit } from '../actions/permit-actions';
import LoadingIndicator from '../components/LoadingIndicator';


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
