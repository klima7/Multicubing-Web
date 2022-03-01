import { useState, useEffect } from 'react';
import React from 'react'
import { useTheme } from '@emotion/react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { login as loginAction } from '../actions/auth-actions';
import { useLocation } from 'react-router-dom';
import { LocationState } from '../types/lib-types';

function LoginPage() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [buttonEnabled, setButtonEnabled] = React.useState(false);
  
  const { state } = useLocation<LocationState>()
  const from = state?.from.pathname
  const pending = useAppSelector((state) => state.auth.loggingInProgress)

  const dispatch = useAppDispatch()
  const theme = useTheme() as any;
  
  function performLogin() {
    dispatch(loginAction(login, password, rememberMe, from));
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const targetId = event.target.id;
    if(targetId === 'login') {
      setLogin(event.target.value);
    }
    else if(targetId === 'password') {
      setPassword(event.target.value);
    }
    else if(targetId === 'rememberMe') {
      setRememberMe(event.target.checked);
    }
  }

  useEffect(() => {
    setButtonEnabled(login.length > 0 && password.length > 0);
  }, [login, password])

  return (
    <div>
        <Grid container>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <Box sx={{mt: 10}}>
              <Paper variant="outlined" style={{display: 'inline-block', width: '60ex', borderColor: theme.palette.primary.main, borderWidth: '1.2pt', padding: '10pt'}}>
                <h1>Login</h1>
                <div>
                  <TextField 
                  id="login"
                  label="Email" 
                  variant="outlined" 
                  onChange={handleChange} 
                  autoComplete="false"
                  style={{width: '100%', marginBottom: '10px'}}
                  />
                </div>
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
                <div style={{textAlign: 'left'}}>
                  <FormControlLabel 
                  control={
                    <Checkbox 
                    id="rememberMe"
                    onChange={handleChange} 
                    defaultChecked 
                    />} 
                  label="Remember me" /></div>
                <div>
                {!pending ?
                  <Button 
                  variant="contained" 
                  style={{width: '100%', boxShadow: 'none'}} 
                  onClick={performLogin}
                  disabled={!buttonEnabled}
                  >Login</Button>
                  :
                  <CircularProgress /> 
                }
                </div>
              </Paper>
            </Box>
          </Grid>
        </Grid>
    </div>
  );
}

export default LoginPage;
