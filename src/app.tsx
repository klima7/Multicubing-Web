import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import AppBarCustom from "./components/AppBar";
import routes from './routes'


function App() {
  return (
    <div>
        <CssBaseline />
        <AppBarCustom />
        <BrowserRouter>
            { routes }
        </BrowserRouter>
    </div>
  );
}

export default App;
