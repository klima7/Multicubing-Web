import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../hooks';
import { registerThunk } from '../actions/registerActions';

function RegisterPage() {

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [repeatedPasswordError, setRepeatedPasswordError] = useState(false);

  const [buttonEnabled, setButtonEnabled] = useState(false);

  const dispatch = useAppDispatch()

  function performRegister() {
    console.log(`Logging ${login} ${email} ${password}`);
    dispatch(registerThunk({login: login, email: email, password: password}))
  }

  function validateEmail(email: string) {
    if(email.length === 0) return true;
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const targetId = event.target.id;
    if(targetId === 'login') {
      const value = event.target.value
      setLogin(value);
      setLoginError(value.length !== 0 && value.length < 5)
    }
    if(targetId === 'email') {
      const value = event.target.value
      setEmail(value);
      setEmailError(value.length !== 0 && !validateEmail(value))
    }
    else if(targetId === 'password') {
      const value = event.target.value
      setPassword(value);
      setPasswordError(value.length !== 0 && value.length < 8)
    }
    else if(targetId === 'repeated_password') {
      const value = event.target.value
      setRepeatedPassword(value);
      setRepeatedPasswordError(value.length !== 0 && value !== password)
    }
  }

  useEffect(() => {
    const error = loginError || emailError || passwordError || repeatedPasswordError;
    const filled = login.length > 0 && email.length > 0 && 
      password.length > 0 && repeatedPassword.length > 0;
    setButtonEnabled(filled && !error);
  }, [loginError, emailError, passwordError, repeatedPasswordError, login, email, 
    password, repeatedPassword])

  return (
    <div>
        <Grid container>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <Box sx={{mt: 10}}>
              <Paper variant="outlined" style={{display: 'inline-block', width: '60ex', borderColor: '#0000ff', borderWidth: '1.2pt', padding: '10pt'}}>
                <h1>Register</h1>
                <div>
                  <TextField 
                  error={loginError}
                  id="login"
                  label="Login" 
                  variant="outlined" 
                  autoComplete="false"
                  onChange={handleChange} 
                  helperText={"Minimum 5 characters"}
                  style={{width: '100%', marginBottom: '10px'}}
                  />
                </div>
                <div>
                  <TextField 
                  error={emailError}
                  id="email"
                  label="Email" 
                  variant="outlined" 
                  autoComplete="false"
                  onChange={handleChange} 
                  style={{width: '100%', marginBottom: '10px'}}
                  helperText={emailError ? 'Invalid email format' : ' '}
                  />
                </div>
                <div>
                  <TextField 
                  error={passwordError}
                  id="password"
                  label="Password" 
                  variant="outlined" 
                  type="password" 
                  autoComplete="false"
                  onChange={handleChange} 
                  helperText="Minimum 8 characters"
                  style={{width: '100%', marginBottom: '10px'}} 
                  />
                </div>
                <div>
                  <TextField 
                  error={repeatedPasswordError}
                  id="repeated_password"
                  label="Repeat Password" 
                  variant="outlined" 
                  type="password" 
                  autoComplete="false"
                  onChange={handleChange} 
                  style={{width: '100%', marginBottom: '10px'}} 
                  helperText={repeatedPasswordError ? "Passwords doesn't match" : ' '}
                  />
                </div>
                <div>
                  <Button 
                  variant="contained" 
                  disabled={!buttonEnabled}
                  onClick={performRegister}
                  style={{width: '100%'}}
                  >Register</Button>
                </div>
              </Paper>
            </Box>
          </Grid>
        </Grid>
    </div>
  );
}

export default RegisterPage;
