import { FC } from 'react';
import Timer from './Timer';
import TimerButtons from './TimerButtons';
import Box from '@mui/material/Box';

interface Props {
  roomSlug: string;
}

const ExtendedTimer: FC<Props> = ({roomSlug}) => {

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      }}>

      <Box>
        <Timer roomSlug={roomSlug} />
      </Box>

      <Box>
        <TimerButtons />
      </Box>

    </Box>
  );

}

export default ExtendedTimer;
