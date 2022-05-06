import Box from '@mui/material/Box';
import { useAppSelector } from '../../../hooks';

const Scramble = () => {

  const scramble = useAppSelector(state => state.room.turn?.scramble);

  return (
    <Box>
      <span style={{
        fontSize: '17pt',
        }}>
        {scramble}
      </span>
    </Box>
  );
}

export default Scramble;
