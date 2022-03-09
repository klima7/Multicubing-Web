import React, { useState, FC } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useTheme } from '@emotion/react';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import { enterRoomPassword } from '../../redux/permit/permit-actions';

interface Props {
  roomSlug: string;
};

const RoomPasswordCard: FC<Props> = ({roomSlug}) => {

  const theme = useTheme() as any;
  const [password, setPassword] = useState('');

  const dispatch = useAppThunkDispatch();
  const enteredPassword = useAppSelector(state => state.permit.enter.password);
  const invalidPassword = useAppSelector(state => state.permit.enter.invalidPassword);
  const pending = useAppSelector(state => state.permit.enter.pending);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  };

  function handleConfirm() {
    dispatch(enterRoomPassword(roomSlug, password));
  };

  function shouldShowInvalidPassword() {
    return invalidPassword && password === enteredPassword;
  };

  return (
    <Paper variant="outlined" style={{display: 'inline-block', width: '55ex', borderColor: theme.palette.primary.main, borderWidth: '1.2pt', padding: '10pt'}}>
      <Box sx={{my: 2}}>
        <Typography variant="h4" >Room password</Typography>
        <Typography variant="subtitle1" sx={{mt: 1}}>Enter room password</Typography>
      </Box>
      <div>
        <TextField 
        error={shouldShowInvalidPassword()}
        id="password"
        label="Password" 
        variant="outlined" 
        type="password" 
        helperText={shouldShowInvalidPassword() ? "Invalid password": " "}
        onChange={handleChange} 
        style={{width: '100%'}} 
        />
      </div>
      <Box sx={{mt: 1}}>
        <Button 
        variant="contained" 
        style={{width: '100%', boxShadow: 'none'}} 
        onClick={handleConfirm}
        disabled={password.length === 0 || pending}
        >Confirm</Button>
      </Box>
    </Paper>
  )
};

export default RoomPasswordCard;