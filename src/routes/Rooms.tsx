import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { deepOrange } from '@mui/material/colors';
import AddRoomDialog from '../components/AddRoomDialog';
import { openAddRoomDialog } from '../actions/add-room-actions';
import { useAppThunkDispatch } from '../utils/hooks';

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

  function handleAddRoomClick() {
    dispatch(openAddRoomDialog());
  }

  return (
    <div>
      <h1>Rooms</h1>
      <AddRoomDialog />
      <Fab variant="extended" style={fabStyle} onClick={handleAddRoomClick}>
        <AddIcon sx={{ mr: 1 }} />
        Add room
      </Fab>
    </div>
  );
}

export default RoomsPage;
