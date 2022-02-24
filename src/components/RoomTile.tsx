import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { FC } from 'react';
import Stack from '@mui/material/Stack';
import { Room } from '../types/types'
import { cubeVisualizations } from '../utils/cube-visualization';

interface Props {
  room: Room;
}

const RoomTile: FC<Props> = ({room}) => {
  return (
    <Paper elevation={3} style={{margin: 0, padding: 0}}>
      <Box sx={{p: 3}}>
        <img src={cubeVisualizations[room.cube].image} alt="" style={{width: '100%'}} />
      </Box>
      <span style={{fontSize: '15pt'}}>{room.name}</span>
    </Paper>
  );
}

export default RoomTile;
