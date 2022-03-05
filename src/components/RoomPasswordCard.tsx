import { useState } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useTheme } from '@emotion/react';
import React from 'react';

const RoomPasswordCard = () => {

  const theme = useTheme() as any;
  const [password, setPassword] = useState('');
  const pending = false;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  };

  function handleConfirm() {

  };

  return (
    <Paper variant="outlined" style={{display: 'inline-block', width: '55ex', borderColor: theme.palette.primary.main, borderWidth: '1.2pt', padding: '10pt'}}>
      <Box sx={{my: 2}}>
        <Typography variant="h4" >Room password</Typography>
        <Typography variant="subtitle1" sx={{mt: 1}}>Enter room password</Typography>
      </Box>
      <div>
        <TextField 
        id="password"
        label="Password" 
        variant="outlined" 
        type="password" 
        onChange={handleChange} 
        style={{width: '100%'}} 
        />
      </div>
      <Box sx={{mt: 2}}>
      {!pending ?
        <Button 
        variant="contained" 
        style={{width: '100%', boxShadow: 'none'}} 
        onClick={handleConfirm}
        disabled={password.length === 0}
        >Confirm</Button>
        :
        <CircularProgress /> 
      }
      </Box>
    </Paper>
  )
};

export default RoomPasswordCard;