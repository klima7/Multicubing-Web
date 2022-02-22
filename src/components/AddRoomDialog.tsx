import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppSelector, useAppThunkDispatch } from '../utils/hooks';
import { clearAddRoomDialog } from '../actions/add-room-actions';

export default function AddRoomDialog() {

  const dispatch = useAppThunkDispatch();
  const open = useAppSelector(state => state.addRoom.open);

  const handleClose = () => {
    dispatch(clearAddRoomDialog());
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>Add room</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can set my maximum width and whether to adapt or not.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
