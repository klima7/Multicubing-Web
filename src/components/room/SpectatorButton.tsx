import { FC } from 'react';
import Button from '@mui/material/Button';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import { setSpectator } from '../../redux/room/room-actions';


const SpectatorButton: FC = () => {

  const dispatch = useAppThunkDispatch();
  const spectator = useAppSelector(state => state.room.me?.spectator) || false;

  return (
    <div>
      
      <Button 
        variant="text" 
        startIcon={<PauseCircleIcon />} 
        onClick={() => dispatch(setSpectator(true))} 
        color="primary"
        disabled={spectator}
      >
        Spectator
      </Button>
      
      /

      <Button 
        variant="text" 
        startIcon={<PlayCircleIcon />} 
        onClick={() => dispatch(setSpectator(false))} 
        color="primary"
        disabled={!spectator}
      >
        Competitor
      </Button>
  
    </div>
  );
}

export default SpectatorButton;
