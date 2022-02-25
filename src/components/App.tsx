import AppBarCustom from "./AppBar";
import Notifications from './Notifications'
import routes from '../routes'
import '../assets/styles/App.css'


function App() {
  return (
    <div className="App">
      <AppBarCustom />
      <Notifications />
      { routes }
    </div>
  );
}

export default App;
