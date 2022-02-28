import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Container, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import AddRoomDialog from '../components/AddRoomDialog';
import { openAddRoomDialog } from '../actions/add-room-actions';
import { useAppThunkDispatch, useAppSelector } from '../utils/hooks';
import { getRooms, processRoomsMessage } from '../actions/rooms-actions';
import RoomTile from '../components/RoomTile';
import { useWebSocket } from '../utils/hooks';
import RoomsFiltersBar from '../components/RoomsFiltersBar';

const fabStyle = {
  backgroundColor: deepOrange[500], 
  color: 'white',
  margin: 0,
  top: 'auto',
  right: 30,
  bottom: 30,
  left: 'auto',
  position: 'fixed',
  boxShadow: 'none',
} as React.CSSProperties;;

function RoomsPage() {

  const [t] = useTranslation();
  const dispatch = useAppThunkDispatch();

  useWebSocket({
    url: "/ws/rooms/", 
    onMessage: event => {
      dispatch(processRoomsMessage(event.data));
    },
    onOpen: event => console.log('Open'),
    onClose: event => console.log('Close'),
    onReconnect: event => {
      console.log("Reconnect");
      dispatch(getRooms());
    },
  });

  const allRooms = useAppSelector(state => state.rooms.rooms);
  const rooms = useAppSelector(state => state.rooms.filteredRooms);
  const fetching = useAppSelector(state => state.rooms.fetching);

  function handleAddRoomClick() {
    dispatch(openAddRoomDialog());
  }

  useEffect(() => {
    dispatch(getRooms());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>{t("rooms")}</h1>
      <Container fixed>
        <Box sx={{mb: 4}}>
          <RoomsFiltersBar />
        </Box>
        <Grid container spacing={2} sx={{mb: 2}}>
          {rooms.map(room => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={room.slug}>
              <RoomTile room={room}/>
            </Grid>
          ))}
          {rooms.length === 0 && fetching === false && (
            <Grid item xs={12}>
              <Typography variant="h2">No rooms</Typography>
              {allRooms.length !== 0 && (
                <Typography variant="subtitle1">Relax the filtering criteria</Typography>
              )}
            </Grid>
          )}
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
