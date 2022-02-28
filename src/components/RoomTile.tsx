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
import CubeImage from './CubeImage';

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
    elevation={0} 
    style={{textAlign: 'left', cursor: 'pointer', border: 'solid 2px #1976D2'}} 
    onClick={handleClick}
    onMouseEnter={() => setMouseOver(true)}
    onMouseLeave={() => setMouseOver(false)}
    >
      <Box sx={{ml: 2, mb: 1, mt: 2}}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
              <Badge 
                color="secondary" 
                badgeContent="0" 
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}>
                <CubeImage cube={room.cube} />
              </Badge>
          </Grid>
          <Grid item xs={8}>
            <Box 
            sx={{pl: 0, mr: 1, height: '100%'}} 
            style={{position: 'relative'}}>
              <span style={{fontSize: '12pt'}}>{room.name}</span>
              <Box 
              sx={{display: 'flex'}}
              style={{position: 'absolute', bottom: 0, width: '100%'}}
              >
                {room.private && (
                  <Tooltip title="Private room">
                    <LockIcon />
                  </Tooltip>
                )}
                {room.description != null && (
                  <Tooltip title={'Description: ' + room.description}>
                    <InfoIcon />
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
      </Box>
    </Paper>
  );
}

export default RoomTile;
