import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import AppBarCustom from "./components/AppBar";
import { ThemeProvider } from '@mui/material/styles';
import routes from './routes'
import theme from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBarCustom />
        <BrowserRouter>
            { routes }
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
