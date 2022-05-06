import { FC } from 'react';
import Box from '@mui/material/Box';
import ExtendedTimer from './ExtendedTimer';
import RoomPanel from '../RoomPanel';
import RoomPanelHeader from '../RoomPanelHeader';
import Scramble from './Scramble';
import TurnIndicator from './TurnIndicator';

interface Props {
  roomSlug: string;
}

const General: FC<Props> = ({roomSlug}) => {

  return (
    <RoomPanel>

      <RoomPanelHeader>General</RoomPanelHeader>

      <Box sx={{ 
        height: '100%',
        padding: '0px 10px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-evenly', 
        }}>
        <TurnIndicator />
        <ExtendedTimer roomSlug={roomSlug} />
        <Scramble />
      </Box>

    </RoomPanel>
  );
}

export default General;
