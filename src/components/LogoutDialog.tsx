import * as React from 'react';
import { useAppSelector, useAppThunkDispatch } from "../utils/hooks";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { hideLogoutDialog } from '../actions/auth-actions';
import { logout } from '../actions/auth-actions';

export default function LogoutDialog() {
  const dispatch = useAppThunkDispatch();
  const open = useAppSelector((state) => state.auth.logoutDialogVisible);

  function handleClose() {
    dispatch(hideLogoutDialog());
  };

  function handleLogout() {
    dispatch(logout)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        Logout
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure that you want to logout?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogout}>Logout</Button>
        <Button onClick={handleClose} autoFocus>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}