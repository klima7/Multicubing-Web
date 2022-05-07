import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useAppSelector } from '../../../hooks';


const SpectatorsList: FC = () => {

  const participants = useAppSelector(state => state.room.participants);

  const spectators = participants.filter(p => p.spectator === true);

  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      
      <Typography variant="button" component="div">
      Spectators:
      </Typography>

      {spectators.map((s, index) => (
        <span>{index !== 0 ? ',' : ''}&nbsp;{s.user.username}</span>
      ))}
  
    </Box>
  );
}

export default SpectatorsList;
