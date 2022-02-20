import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/images/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { logout } from '../actions/auth-actions';


function AppBarCustom() {
  const history = useHistory();

  const dispatch = useAppDispatch();
  const logged = useAppSelector((state) => state.auth.logged);

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary" elevation={0}>
          <Toolbar>
            <div style={{display: 'flex', cursor: 'pointer'}} onClick={() => history.push('/')}>
              <img src={logo} className="App-logo" alt="logo" height='35pt' style={{ marginRight: '10pt' }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Multicubing
              </Typography>
            </div>
            <div style={{flex: 1}} />

            {logged &&
            <>
              <Button color="inherit" onClick={() => dispatch(logout)}>Logout</Button>
            </>
            }

            {!logged &&
            <>
              <Button color="inherit" component={Link} to={'/login'}>Login</Button>
              <Button color="inherit" component={Link} to={'/register'}>Register</Button>
            </>
            }
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default AppBarCustom
