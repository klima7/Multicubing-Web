import { FC } from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../hooks';
import ExtendedTimer from './ExtendedTimer';

interface Props {
  roomSlug: string;
}

const Status: FC<Props> = ({roomSlug}) => {

  const turn_number = useAppSelector(state => state.room.turn?.number);
  const scramble = useAppSelector(state => state.room.turn?.scramble);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column'}} style={{
      border: 'solid 2px black', 
      borderRadius: 10,
      textAlign: 'left',
      height: '100%'
      }}>

      <Box style={{textAlign: 'center', borderBottom: 'solid 2px black'}}>
        <h2 style={{marginBottom: 0, marginTop: 0}}>Status</h2>
      </Box>

      <Box sx={{ flex: 1 }}>
        <p>Turn number: {turn_number}</p>
        <p>Scramble: {scramble}</p>
        <ExtendedTimer roomSlug={roomSlug} />
      </Box>

    </Box>
  );
}

export default Status;
