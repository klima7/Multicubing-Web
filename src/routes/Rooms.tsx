import React, { useEffect } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/material';
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Rooms</h1>
      <Container fixed>
        <Grid container spacing={2} sx={{mb: 2}}>
          {rooms.map(room => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <RoomTile room={room}/>
            </Grid>
          ))}
        </Grid>
      </Container>
      <AddRoomDialog />
      <Fab variant="extended" style={fabStyle} onClick={handleAddRoomClick}>
        <AddIcon sx={{ mr: 1 }} />
        Add room
      </Fab>
    </div>
  );
}

export default RoomsPage;
