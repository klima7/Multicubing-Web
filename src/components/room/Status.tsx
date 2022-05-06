import { FC } from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../hooks';
import ExtendedTimer from './ExtendedTimer';
import RoomPanel from './RoomPanel';
import RoomPanelHeader from './RoomPanelHeader';

interface Props {
  roomSlug: string;
}

const Status: FC<Props> = ({roomSlug}) => {

  const turn_number = useAppSelector(state => state.room.turn?.number);
  const scramble = useAppSelector(state => state.room.turn?.scramble);

  return (
    <RoomPanel>

      <RoomPanelHeader>Status</RoomPanelHeader>

      <Box sx={{ flex: 1 }}>
        <p>Turn number: {turn_number}</p>
        <p>Scramble: {scramble}</p>
        <ExtendedTimer roomSlug={roomSlug} />
      </Box>

    </RoomPanel>
  );
}

export default Status;
