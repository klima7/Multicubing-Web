import { useParams } from 'react-router';
import { useAppSelector, useAppThunkDispatch } from "../utils/hooks";
import RoomPasswordScreen from '../components/RoomPasswordScreen';
import RoomScreen from '../components/RoomScreen';


type RoomParams = {
  room: string;
};

function RoomPage() {
  const permit = useAppSelector(state => state.permit.permit)
  const { room } = useParams<RoomParams>();

  return (
    <div>
      {permit ? <RoomScreen /> : <RoomPasswordScreen /> }
    </div>
  );
}

export default RoomPage;    
