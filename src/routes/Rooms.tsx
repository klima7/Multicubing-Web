import React, { useEffect } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { deepOrange } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import AddRoomDialog from '../components/AddRoomDialog';
import { openAddRoomDialog } from '../actions/add-room-actions';
import { useAppThunkDispatch, useAppSelector } from '../utils/hooks';
import { getRooms } from '../actions/rooms-actions';
import RoomTile from '../components/RoomTile';

const fabStyle = {
  backgroundColor: deepOrange[500], 
  color: 'white',
  margin: 0,
  top: 'auto',
  right: 30,
  bottom: 30,
  left: 'auto',
  position: 'fixed',
} as React.CSSProperties;;

function RoomsPage() {

  const dispatch = useAppThunkDispatch();
  const rooms = useAppSelector(state => state.rooms.rooms);

  function handleAddRoomClick() {
    dispatch(openAddRoomDialog());
  }

  useEffect(() => {
    dispatch(getRooms());
  }, [])

  return (
    <div>
      <h1>Rooms</h1>
      <Box sx={{mx: 20}}>
        <Grid container spacing={2} rowSpacing={0}>
          {rooms.map(room => (
            <Grid item xs={6} md={3} lg={2} rowSpacing={0}>
              <RoomTile room={room}/>
            </Grid>
          ))}
        </Grid>
      </Box>
      <AddRoomDialog />
      <Fab variant="extended" style={fabStyle} onClick={handleAddRoomClick}>
        <AddIcon sx={{ mr: 1 }} />
        Add room
      </Fab>
    </div>
  );
}

export default RoomsPage;
