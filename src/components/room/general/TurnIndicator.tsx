import Box from '@mui/material/Box';
import { useAppSelector } from '../../../hooks';

const TurnIndicator = () => {

  const turnNumber = useAppSelector(state => state.room.turn?.number);

  return (
    <Box>
      <span style={{
        fontSize: '17pt',
        }}>
        Turn #{turnNumber}
      </span>
    </Box>
  );
}

export default TurnIndicator;
