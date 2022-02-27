import { createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';


export const standardTheme = createTheme({
  palette: {
    background: {
      default: "#F7F7F7"
    },
    secondary: {
      main: deepOrange[500]
    }
  }
});


export const darkTheme = createTheme({
  palette: {
    background: {
      default: "#000000"
    },
    secondary: {
      main: deepOrange[500]
    }
  }
});


