import { FC } from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../../hooks';
import ExtendedTimer from './ExtendedTimer';
import RoomPanel from '../RoomPanel';
import RoomPanelHeader from '../RoomPanelHeader';
import Scramble from './Scramble';
import TurnIndicator from './TurnIndicator';
import SpectatorIndicator from './SpectatorIndicator';

interface Props {
  roomSlug: string;
}

const General: FC<Props> = ({roomSlug}) => {

  const spectator = useAppSelector(state => state.room.me?.spectator);

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
        { 
          !spectator ?
          <ExtendedTimer roomSlug={roomSlug} />
          :
          <SpectatorIndicator />
        }
        <Scramble />
      </Box>

    </RoomPanel>
  );
}

export default General;
