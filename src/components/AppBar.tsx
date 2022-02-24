import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { logout } from '../actions/auth-actions';
import AppBarLogo from './AppBarLogo';
import CurrentUserIndicator from './CurrentUserIndicator';


function AppBarCustom() {
  const dispatch = useAppDispatch();
  const logged = useAppSelector((state) => state.auth.logged);

  return (
      <AppBar position="fixed" color="primary" elevation={0}>
        <Toolbar>
          <AppBarLogo />

          <div style={{flex: 1}} />

          {logged &&
          <>
            <CurrentUserIndicator />
            <Box sx={{mr: 3}} />
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
    );
}

export default AppBarCustom
