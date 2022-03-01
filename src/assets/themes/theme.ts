import { createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import shadows, { Shadows } from '@mui/material/styles/shadows';
import { ThemeIdentifier } from '../../types/types';
import { ThemeOptions } from '@mui/material';


export function getTheme(mode: ThemeIdentifier) {
  const themeParams: ThemeOptions = {
    shadows: shadows.map(() => 'none') as Shadows,
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
