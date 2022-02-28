import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { useAppSelector, useAppThunkDispatch } from '../utils/hooks';
import { ThemeIdentifier } from '../types/types';
import { setTheme } from '../actions/general-actions';

const ThemeSwitcher = () => {
  const dispatch = useAppThunkDispatch();
  const theme = useAppSelector(state => state.general.theme);

  function changeTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme({theme: newTheme}));
  }

  return (
    <Box>
      {theme === "light" && (
        <Tooltip title="Dark mode">
          <IconButton onClick={changeTheme}>
            <DarkModeIcon />
          </IconButton>
        </Tooltip>
      )}
      {theme === "dark" && (
        <Tooltip title="Light mode">
          <IconButton onClick={changeTheme}>
            <LightModeIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export default ThemeSwitcher;