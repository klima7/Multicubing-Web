import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';


function AppBarCustom() {
  const navigate = useNavigate();
  const logged = useAppSelector((state) => state.authReducer.logged)

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <div style={{display: 'flex', cursor: 'pointer'}} onClick={() => navigate('/')}>
              <img src={logo} className="App-logo" alt="logo" height='35pt' style={{ marginRight: '10pt' }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Multicubing
              </Typography>
            </div>
            <div style={{flex: 1}} />
            {logged ? 'Logged' : 'Not logged'} 
            <Button color="inherit" component={Link} to={'/login'}>Login</Button>
            <Button color="inherit" component={Link} to={'/register'}>Register</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default AppBarCustom
