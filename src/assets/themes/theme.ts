import { createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import { ThemeIdentifier } from '../../types/types';
import { ThemeOptions } from '@mui/material';


export function getTheme(theme: ThemeIdentifier) {
  const mode = theme === ThemeIdentifier.Standard ? 'light' : 'dark';

  const themeParams: ThemeOptions = {
    palette: {
      mode: mode,
      background: {
        default: getBackgroundColor(theme)
      },
      secondary: {
        main: deepOrange[500]
      }
    }
  }
  return createTheme(themeParams);
}

function getBackgroundColor(theme: ThemeIdentifier): string {
  switch(theme) {
    case ThemeIdentifier.Standard:
      return "#f3f3f3";
    default:
      return "#121212";
  }
}
