import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function LoginPage() {
  return (
    <div>
        <Grid container>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <Box sx={{mt: 10}}>
              <Paper variant="outlined" style={{display: 'inline-block', width: '60ex', borderColor: '#0000ff', borderWidth: '1.2pt', padding: '10pt'}}>
                <h1>Login</h1>
                <div><TextField label="Login" variant="outlined" style={{width: '100%', marginBottom: '10px'}}/></div>
                <div><TextField label="Password" variant="outlined" type="password" style={{width: '100%'}} /></div>
                <div style={{textAlign: 'left'}}><FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /></div>
                <div><Button variant="contained" style={{width: '100%'}}>Login</Button></div>
              </Paper>
            </Box>
          </Grid>
        </Grid>
    </div>
  );
}

export default LoginPage;
