import { FC } from 'react';
import Button from '@mui/material/Button';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import { setSpectator } from '../../redux/room/room-actions';


const SpectatorButton: FC = () => {

  const dispatch = useAppThunkDispatch();
  const spectator = useAppSelector(state => state.room.me?.spectator) || false;

  function onClick() {
    dispatch(setSpectator(!spectator));
  }

  return (
    <div>
      { !spectator ?
      <Button variant="contained" startIcon={<PauseCircleIcon />} onClick={onClick} color="primary">
        Enter spectator mode
      </Button>
      :
      <Button variant="contained" startIcon={<PlayCircleIcon />} onClick={onClick} color="primary">
        Enter competitor mode
      </Button>
      }
    </div>
  );
}

export default SpectatorButton;
