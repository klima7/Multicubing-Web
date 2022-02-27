import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import LockIcon from '@mui/icons-material/Lock';
import { FC } from 'react';
import { Room } from '../types/types'
import { cubeVisualizations } from '../utils/cube-visualization';

interface Props {
  room: Room;
}

const RoomTile: FC<Props> = ({room}) => {
  const history = useHistory();

  function handleClick() {
    history.push(`/room/${room.slug}`)
  }

  return (
    <Paper elevation={3} style={{textAlign: 'left', cursor: 'pointer'}} onClick={handleClick}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box sx={{ml: 2, my: 1}}>
          <Badge 
            color="secondary" 
            badgeContent="0" 
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}>
            <img src={cubeVisualizations[room.cube].image} alt="" style={{width: '100%'}} />
          </Badge>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{pl: 0, mr: 1, height: '100%'}} style={{position: 'relative'}}>
            <span style={{fontSize: '12pt'}}>{room.name}</span>
            <Box style={{position: 'absolute', bottom: 0}}>
              {room.private && (
                <Tooltip title="Private room">
                  <LockIcon color="success" />
                </Tooltip>
              )}
              {room.description != null && (
                <Tooltip title={'Description: ' + room.description}>
                  <InfoIcon />
                </Tooltip>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default RoomTile;
