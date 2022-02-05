import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../images/logo.svg';


function AppBarCustom() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <div style={{display: 'flex'}}>
              <img src={logo} className="App-logo" alt="logo" width='30pt' style={{ marginRight: '10pt' }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Multicubing
              </Typography>
            </div>
            <div style={{flex: 1}} />
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default AppBarCustom
