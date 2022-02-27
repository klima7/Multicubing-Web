import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import LockIcon from '@mui/icons-material/Lock';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { Room } from '../types/types'
import { cubeVisualizations } from '../utils/cube-visualization';

interface Props {
  room: Room;
}

const RoomTile: FC<Props> = ({room}) => {
  const history = useHistory();
  const [mouseOver, setMouseOver] = useState(false);

  function handleClick() {
    history.push(`/room/${room.slug}`)
  }

  return (
    <Paper 
    elevation={3} 
    style={{textAlign: 'left', cursor: 'pointer'}} 
    onClick={handleClick}
    onMouseEnter={() => setMouseOver(true)}
    onMouseLeave={() => setMouseOver(false)}
    >
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
          <Box 
          sx={{pl: 0, mr: 1, height: '100%'}} 
          style={{position: 'relative'}}>
            <span style={{fontSize: '12pt'}}>{room.name}</span>
            <Box 
            sx={{display: 'flex'}}
            style={{position: 'absolute', bottom: 6, width: '100%'}}
            >
              {room.private && (
                <Tooltip title="Private room">
                  <LockIcon color="primary" />
                </Tooltip>
              )}
              {room.description != null && (
                <Tooltip title={'Description: ' + room.description}>
                  <InfoIcon color="primary" />
                </Tooltip>
              )}
              <div style={{flex: 1}} />
              {mouseOver && (
                <Typography style={{fontWeight: 'bold'}} color="secondary">
                Join!
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default RoomTile;
