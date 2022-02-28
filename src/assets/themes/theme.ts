import { createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import { ThemeIdentifier } from '../../types/types';
import { ThemeOptions } from '@mui/material';


export function getTheme(mode: ThemeIdentifier) {
  const themeParams: ThemeOptions = {
    palette: {
      mode: mode,
      background: {
        default: getBackgroundColor(mode)
      },
      secondary: {
        main: deepOrange[500]
      }
    }
  }
  return createTheme(themeParams);
}

function getBackgroundColor(mode: ThemeIdentifier): string {
  switch(mode) {
    case "light":
      return "#f3f3f3";
    default:
      return "#121212";
  }
}
