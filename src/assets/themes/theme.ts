import { createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    background: {
      default: "#F7F7F7"
    },
    secondary: {
      main: deepOrange[500]
    }
  }
});


export default theme;
