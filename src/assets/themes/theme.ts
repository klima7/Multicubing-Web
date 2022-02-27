import { createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import { ThemeIdentifier } from '../../types/types';
import { ThemeOptions } from '@mui/material';


export function getTheme(theme: ThemeIdentifier) {
  const mode = theme === ThemeIdentifier.Standard ? 'light' : 'dark';
  const themeParams: ThemeOptions = {
    palette: {
      mode: mode,
      secondary: {
        main: deepOrange[500]
      }
    }
  }
  return createTheme(themeParams);
}
