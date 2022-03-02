import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppSelector, useAppThunkDispatch } from "../utils/hooks";
import RoomPasswordScreen from '../components/RoomPasswordScreen';
import RoomScreen from '../components/RoomScreen';
import { checkPermit } from '../actions/permit-actions';


type RoomParams = {
  roomSlug: string;
};

function RoomPage() {
  const permit = useAppSelector(state => state.permit.permit);
  const dispatch = useAppThunkDispatch();
  const { roomSlug } = useParams<RoomParams>();

  useEffect(() => {
    dispatch(checkPermit(roomSlug));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {permit ? <RoomScreen /> : <RoomPasswordScreen /> }
    </div>
  );
}

export default RoomPage;    
