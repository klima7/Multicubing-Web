import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import AppBarLogo from './AppBarLogo';
import CurrentUserIndicator from './CurrentUserIndicator';
import LogoutDialog from './LogoutDialog';
import { showLogoutDialog } from '../../redux/auth/auth-actions';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSelector from './LanguageSelector';
import ParrentNav from './ParrentNav';


function AppBarCustom() {
  const dispatch = useAppDispatch();
  const logged = useAppSelector((state) => state.auth.logged);

  function handleLogout() {
    dispatch(showLogoutDialog());
  };

  return (
      <div>
        <LogoutDialog />
        <AppBar position="fixed" color="primary" elevation={0}>
          <Toolbar>
            <AppBarLogo />
            <Box sx={{mr: 3}} />
            <ParrentNav />

            <div style={{flex: 1}} />

            <LanguageSelector />
            <Box sx={{mr: 4}} />

            <ThemeSwitcher />
            <Box sx={{mr: 4}} />

            {logged &&
            <>
              <CurrentUserIndicator />
              <Box sx={{mr: 4}} />
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
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
        <Toolbar />
      </div>
    );
}

export default AppBarCustom
